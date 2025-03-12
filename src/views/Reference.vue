<template>
  <div class="reference-container">
    <div class="studio-background">
      <h1 class="studio-title">参考图生成</h1>
      
      <div class="reference-description">
        <p>AI智能推荐写真风格与姿势，激发您的创作灵感</p>
      </div>
      
      <el-card class="reference-card">
        <el-form :model="form" label-width="120px">
          <el-form-item label="选择风格">
            <el-select v-model="form.style" placeholder="请选择写真风格">
              <el-option label="古风写真" value="traditional" />
              <el-option label="现代时尚" value="modern" />
              <el-option label="艺术写真" value="artistic" />
              <el-option label="复古风格" value="retro" />
              <el-option label="动漫风格" value="anime" />
            </el-select>
          </el-form-item>
          
          <el-form-item label="场景">
            <el-select v-model="form.scene" placeholder="请选择场景">
              <el-option label="室内" value="indoor" />
              <el-option label="室外" value="outdoor" />
              <el-option label="自然风光" value="nature" />
              <el-option label="城市街景" value="urban" />
              <el-option label="抽象背景" value="abstract" />
            </el-select>
          </el-form-item>
          
          <el-form-item label="其他要求">
            <el-input
              v-model="form.requirements"
              type="textarea"
              placeholder="请输入其他要求或描述"
            />
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="generateReferences">生成参考图</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      
      <div v-if="generatedImages.length > 0" class="results-section">
        <h2>生成结果</h2>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(image, index) in generatedImages" :key="index">
            <el-card class="image-card" shadow="hover">
              <el-image :src="image.url" fit="cover" class="reference-image"></el-image>
              <div class="image-actions">
                <el-button type="primary" size="small" @click="useAsReference(image)">
                  使用此参考图
                </el-button>
                <el-button size="small" @click="downloadImage(image)">
                  <el-icon><Download /></el-icon>
                </el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Download } from '@element-plus/icons-vue'

const router = useRouter()

const form = ref({
  style: '',
  scene: '',
  requirements: ''
})

const generatedImages = ref([])
const isLoading = ref(false)

const generateReferences = () => {
  if (!form.value.style || !form.value.scene) {
    ElMessage.warning('请选择风格和场景')
    return
  }
  
  isLoading.value = true
  
  // 模拟API调用
  setTimeout(() => {
    // 模拟返回的图片数据
    generatedImages.value = [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853',
        style: form.value.style,
        scene: form.value.scene
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
        style: form.value.style,
        scene: form.value.scene
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f',
        style: form.value.style,
        scene: form.value.scene
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
        style: form.value.style,
        scene: form.value.scene
      }
    ]
    
    isLoading.value = false
    
    ElMessage.success('参考图生成成功')
  }, 2000)
}

const useAsReference = (image) => {
  // 将选中的参考图传递给创建页面
  localStorage.setItem('selectedReference', JSON.stringify(image))
  router.push('/create')
}

const downloadImage = (image) => {
  const a = document.createElement('a')
  a.href = image.url
  a.download = `reference-${image.id}.jpg`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<style scoped>
.reference-container {
  width: 100%;
  min-height: 100vh;
  padding: 20px;
}

.studio-background {
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.studio-background::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.15;
  z-index: -1;
}

.studio-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #333;
  font-family: 'STXingkai', 'STKaiti', serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.reference-description {
  text-align: center;
  margin-bottom: 40px;
  color: #666;
  font-size: 1.1rem;
}

.reference-card {
  margin-bottom: 40px;
  padding: 20px;
}

.results-section {
  margin-top: 60px;
}

.results-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-family: 'STXingkai', 'STKaiti', serif;
  color: #333;
}

.image-card {
  margin-bottom: 20px;
  overflow: hidden;
}

.reference-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.image-actions {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>