<template>
  <div class="create-container">
    <div class="studio-background">
      <h1 class="studio-title">生成写真</h1>
      
      <div class="create-description">
        <p>上传照片，选择参考图，创作您的专属写真</p>
      </div>
      
      <el-steps :active="currentStep" finish-status="success" class="create-steps">
        <el-step title="上传照片" />
        <el-step title="选择风格" />
        <el-step title="生成结果" />
      </el-steps>
      
      <!-- 步骤1：上传照片 -->
      <div v-if="currentStep === 0" class="step-content">
        <el-row :gutter="30">
          <el-col :span="12">
            <el-card class="upload-card">
              <template #header>
                <div class="card-header">
                  <h3>上传头像</h3>
                  <p class="upload-tip">请上传正面清晰的照片</p>
                </div>
              </template>
              <el-upload
                class="upload-area"
                drag
                action="#"
                :auto-upload="false"
                :on-change="handleAvatarChange"
              >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                  拖拽文件到此处或 <em>点击上传</em>
                </div>
              </el-upload>
              <div v-if="avatar" class="preview">
                <h4>预览</h4>
                <el-image :src="avatar" fit="cover" class="preview-image"></el-image>
              </div>
            </el-card>
          </el-col>
          
          <el-col :span="12">
            <el-card class="upload-card">
              <template #header>
                <div class="card-header">
                  <h3>选择参考图</h3>
                  <p class="upload-tip">选择或上传参考图片</p>
                </div>
              </template>
              <div class="reference-options">
                <el-tabs v-model="referenceTab">
                  <el-tab-pane label="上传参考图" name="upload">
                    <el-upload
                      class="upload-area"
                      drag
                      action="#"
                      :auto-upload="false"
                      :on-change="handleReferenceChange"
                    >
                      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                      <div class="el-upload__text">
                        拖拽文件到此处或 <em>点击上传</em>
                      </div>
                    </el-upload>
                  </el-tab-pane>
                  <el-tab-pane label="推荐参考图" name="recommended">
                    <el-scrollbar height="300px">
                      <div class="reference-grid">
                        <div v-for="(img, index) in recommendedReferences" :key="index" 
                             class="reference-item" 
                             :class="{ 'selected': selectedReference === img }"
                             @click="selectReference(img)">
                          <el-image :src="img.url" fit="cover"></el-image>
                        </div>
                      </div>
                    </el-scrollbar>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-card>
          </el-col>
        </el-row>
        
        <div class="step-actions">
          <el-button type="primary" @click="nextStep" :disabled="!canProceed">
            下一步
          </el-button>
        </div>
      </div>
      
      <!-- 步骤2：选择风格 -->
      <div v-if="currentStep === 1" class="step-content">
        <el-card class="style-card">
          <el-form :model="styleForm" label-width="100px">
            <el-form-item label="写真风格">
              <el-radio-group v-model="styleForm.style">
                <el-radio-button label="traditional">古风写真</el-radio-button>
                <el-radio-button label="modern">现代写真</el-radio-button>
                <el-radio-button label="artistic">艺术写真</el-radio-button>
                <el-radio-button label="anime">动漫风格</el-radio-button>
              </el-radio-group>
            </el-form-item>
            
            <el-form-item label="其他要求">
              <el-input
                v-model="styleForm.requirements"
                type="textarea"
                placeholder="请输入其他具体要求"
                rows="4"
              />
            </el-form-item>
          </el-form>
        </el-card>
        
        <div class="step-actions">
          <el-button @click="prevStep">上一步</el-button>
          <el-button type="primary" @click="generatePhoto">生成写真</el-button>
        </div>
      </div>
      
      <!-- 步骤3：生成结果 -->
      <div v-if="currentStep === 2" class="step-content">
        <div v-if="isGenerating" class="generating">
          <el-progress type="circle" :percentage="generatingProgress"></el-progress>
          <p>正在生成您的写真，请稍候...</p>
        </div>
        
        <div v-else-if="generatedPhotos.length > 0" class="results">
          <el-row :gutter="20">
            <el-col :span="8" v-for="(photo, index) in generatedPhotos" :key="index">
              <el-card class="result-card" shadow="hover">
                <el-image :src="photo.url" fit="cover" class="result-image"></el-image>
                <div class="result-actions">
                  <el-button type="primary" @click="savePhoto(photo)">保存</el-button>
                  <el-button @click="regenerate">重新生成</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        
        <div class="step-actions">
          <el-button @click="prevStep">返回修改</el-button>
          <el-button type="primary" @click="finish">完成</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'

const router = useRouter()
const currentStep = ref(0)
const avatar = ref('')
const referenceTab = ref('upload')
const selectedReference = ref(null)
const isGenerating = ref(false)
const generatingProgress = ref(0)

const styleForm = ref({
  style: '',
  requirements: ''
})

// 推荐参考图
const recommendedReferences = ref([
  {
    url: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853',
    style: 'traditional'
  },
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    style: 'modern'
  },
  {
    url: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f',
    style: 'artistic'
  }
])

const generatedPhotos = ref([])

const canProceed = computed(() => {
  return avatar.value && selectedReference.value
})

const handleAvatarChange = (file) => {
  avatar.value = URL.createObjectURL(file.raw)
}

const handleReferenceChange = (file) => {
  selectedReference.value = {
    url: URL.createObjectURL(file.raw),
    style: 'custom'
  }
}

const selectReference = (reference) => {
  selectedReference.value = reference
}

const nextStep = () => {
  if (canProceed.value) {
    currentStep.value++
  } else {
    ElMessage.warning('请上传头像并选择参考图')
  }
}

const prevStep = () => {
  currentStep.value--
}

const generatePhoto = () => {
  if (!styleForm.value.style) {
    ElMessage.warning('请选择写真风格')
    return
  }
  
  currentStep.value++
  isGenerating.value = true
  
  // 模拟生成进度
  const interval = setInterval(() => {
    generatingProgress.value += 10
    if (generatingProgress.value >= 100) {
      clearInterval(interval)
      isGenerating.value = false
      // 模拟生成结果
      generatedPhotos.value = [
        {
          url: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853',
          style: styleForm.value.style
        },
        {
          url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
          style: styleForm.value.style
        },
        {
          url: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f',
          style: styleForm.value.style
        }
      ]
    }
  }, 500)
}

const savePhoto = (photo) => {
  ElMessage.success('保存成功')
}

const regenerate = () => {
  generatedPhotos.value = []
  generatePhoto()
}

const finish = () => {
  router.push('/my-photos')
}
</script>

<style scoped>
.create-container {
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
}

.studio-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #333;
  font-family: 'STXingkai', 'STKaiti', serif;
}

.create-description {
  text-align: center;
  margin-bottom: 30px;
  color: #666;
}

.create-steps {
  margin-bottom: 40px;
}

.step-content {
  margin-top: 30px;
}

.upload-card {
  margin-bottom: 20px;
}

.card-header {
  text-align: center;
}

.upload-tip {
  color: #999;
  font-size: 14px;
  margin-top: 5px;
}

.preview {
  margin-top: 20px;
  text-align: center;
}

.preview-image {
  width: 200px;
  height: 200px;
  border-radius: 4px;
}

.reference-options {
  min-height: 400px;
}

.reference-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 10px;
}

.reference-item {
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 4px;
  overflow: hidden;
}

.reference-item.selected {
  border-color: #409EFF;
}

.reference-item .el-image {
  width: 100%;
  height: 150px;
}

.step-actions {
  margin-top: 30px;
  text-align: center;
}

.style-card {
  padding: 20px;
}

.generating {
  text-align: center;
  padding: 40px;
}

.generating p {
  margin-top: 20px;
  color: #666;
}

.results {
  margin-top: 20px;
}

.result-card {
  margin-bottom: 20px;
}

.result-image {
  width: 100%;
  height: 300px;
}

.result-actions {
  margin-top: 10px;
  text-align: center;
}
</style>