<template>
  <div class="profile-container">
    <h1>个人中心</h1>
    
    <el-card class="profile-card">
      <template #header>
        <div class="card-header">
          <span>个人信息</span>
        </div>
      </template>
      
      <div class="user-info">
        <el-avatar :size="100" src="https://placekitten.com/200/200"></el-avatar>
        <div class="info-details">
          <h3>用户名</h3>
          <p>邮箱: user@example.com</p>
          <p>注册时间: 2023-01-01</p>
        </div>
      </div>
    </el-card>
    
    <el-card class="profile-card">
      <template #header>
        <div class="card-header">
          <span>我的作品</span>
        </div>
      </template>
      
      <el-empty v-if="true" description="暂无作品"></el-empty>
    </el-card>
  </div>
</template>

<script setup>
// 个人中心逻辑
</script>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.profile-card {
  margin-bottom: 30px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 30px;
}

.info-details h3 {
  margin-bottom: 10px;
}

.info-details p {
  margin-bottom: 5px;
  color: #666;
}
</style>