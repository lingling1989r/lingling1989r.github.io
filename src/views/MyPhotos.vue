<template>
  <div class="my-photos-container">
    <div class="studio-background">
      <h1 class="studio-title">我的写真</h1>
      
      <div class="photos-description">
        <p>您的专属AI写真作品集</p>
      </div>
      
      <div v-if="photos.length > 0" class="photos-grid">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(photo, index) in photos" :key="index">
            <el-card class="photo-card" shadow="hover">
              <el-image :src="photo.url" fit="cover" class="photo-image" @click="showLargeImage(photo)"></el-image>
              <div class="photo-info">
                <span>{{ photo.title }}</span>
                <div class="photo-actions">
                  <time class="time">{{ photo.date }}</time>
                  <div class="action-buttons">
                    <el-button text size="small" @click="downloadImage(photo)">
                      <el-icon><Download /></el-icon>
                    </el-button>
                    <el-button text size="small" @click="deletePhoto(index)">
                      <el-icon><Delete /></el-icon>
                    </el-button>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      
      <el-empty v-else description="暂无写真作品" />
      
      <el-dialog v-model="dialogVisible" width="70%">
        <el-image v-if="selectedPhoto" :src="selectedPhoto.url" fit="contain" style="width: 100%;"></el-image>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Download, Delete } from '@element-plus/icons-vue'

// 模拟数据
const photos = ref([
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853',
    title: '古风写真',
    date: '2023-05-15'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    title: '现代写真',
    date: '2023-05-20'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f',
    title: '艺术写真',
    date: '2023-05-25'
  }
])

const dialogVisible = ref(false)
const selectedPhoto = ref(null)

const showLargeImage = (photo) => {
  selectedPhoto.value = photo
  dialogVisible.value = true
}

const downloadImage = (photo) => {
  const a = document.createElement('a')
  a.href = photo.url
  a.download = `${photo.title}.jpg`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  
  ElMessage({
    message: '下载成功',
    type: 'success'
  })
}

const deletePhoto = (index) => {
  ElMessageBox.confirm(
    '确定要删除这张写真吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      photos.value.splice(index, 1)
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {})
}
</script>

<style scoped>
.my-photos-container {
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

.photos-description {
  text-align: center;
  margin-bottom: 40px;
  color: #666;
  font-size: 1.1rem;
}

.photos-grid {
  margin-bottom: 40px;
}

.photo-card {
  margin-bottom: 20px;
  transition: transform 0.3s;
}

.photo-card:hover {
  transform: translateY(-5px);
}

.photo-image {
  height: 200px;
  width: 100%;
  cursor: pointer;
}

.photo-info {
  padding: 14px;
}

.photo-actions {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time {
  font-size: 12px;
  color: #999;
}

.action-buttons {
  display: flex;
}
</style>