<template>
  <div class="gallery-container">
    <h1>作品展示</h1>
    
    <el-row :gutter="20">
      <el-col 
        v-for="(image, index) in images" 
        :key="index"
        :xs="24" 
        :sm="12" 
        :md="8" 
        :lg="6" 
        :xl="6"
      >
        <el-card :body-style="{ padding: '0px' }" class="image-card">
          <el-image 
            :src="image.url" 
            fit="cover"
            class="gallery-image"
            @click="showLargeImage(image)"
          />
          <div class="image-info">
            <span>{{ image.title }}</span>
            <div class="bottom">
              <time class="time">{{ image.date }}</time>
              <el-button text class="button" @click="downloadImage(image)">
                <el-icon><Download /></el-icon>
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    
    <el-dialog v-model="dialogVisible" width="70%">
      <el-image 
        v-if="selectedImage" 
        :src="selectedImage.url" 
        fit="contain"
        style="width: 100%;"
      />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Download } from '@element-plus/icons-vue'

// 模拟图片数据
const images = ref([
  {
    url: 'https://placekitten.com/600/400',
    title: '写真作品 1',
    date: '2023-05-15'
  },
  {
    url: 'https://placekitten.com/601/400',
    title: '写真作品 2',
    date: '2023-05-16'
  },
  {
    url: 'https://placekitten.com/600/401',
    title: '写真作品 3',
    date: '2023-05-17'
  },
  {
    url: 'https://placekitten.com/602/402',
    title: '写真作品 4',
    date: '2023-05-18'
  },
  {
    url: 'https://placekitten.com/603/403',
    title: '写真作品 5',
    date: '2023-05-19'
  },
  {
    url: 'https://placekitten.com/604/404',
    title: '写真作品 6',
    date: '2023-05-20'
  }
])

const dialogVisible = ref(false)
const selectedImage = ref(null)

const showLargeImage = (image) => {
  selectedImage.value = image
  dialogVisible.value = true
}

const downloadImage = (image) => {
  const a = document.createElement('a')
  a.href = image.url
  a.download = `${image.title}.jpg`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<style scoped>
.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.image-card {
  margin-bottom: 20px;
  transition: transform 0.3s;
}

.image-card:hover {
  transform: translateY(-5px);
}

.gallery-image {
  height: 200px;
  width: 100%;
  cursor: pointer;
}

.image-info {
  padding: 14px;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>