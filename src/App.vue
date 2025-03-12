<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="header-container">
          <div class="logo">
            <router-link to="/">【悦】光宝盒AI写真馆</router-link>
          </div>
          <el-menu :mode="'horizontal'" :router="true" class="nav-menu">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/create">生成写真</el-menu-item>
            <el-menu-item index="/reference">参考图</el-menu-item>
            <el-menu-item index="/my-photos">我的写真</el-menu-item>
            <el-menu-item index="/profile">我的</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
      
      <el-footer>
        <div class="footer-content">
          <p>© 2023 【悦】光宝盒 - 所有权利保留</p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style>
.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.logo a {
  color: #409EFF;
  text-decoration: none;
}

.nav-menu {
  border-bottom: none;
  margin-left: auto;  /* 添加这行，让导航靠右 */
}
</style>