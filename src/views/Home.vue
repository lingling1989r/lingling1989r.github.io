<template>
  <div class="home-container">
    <!-- 轮播展示区 -->
    <div class="hero-section">
      <el-carousel height="600px" class="main-carousel">
        <el-carousel-item v-for="(item, index) in showcaseItems" :key="index">
          <div class="carousel-content" :style="{ backgroundImage: `url(${item.imageUrl})` }">
            <div class="carousel-overlay">
              <h1 class="brand-title">【悦】光宝盒-AI写真</h1>
              <p class="brand-slogan">【悦】光宝盒· 焕新你的艺术时刻和想象空间</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 功能展示区 -->
    <div class="features-section">
      <h2 class="section-title">创作中心</h2>
      <el-row :gutter="30">
        <el-col :span="12">
          <el-card class="feature-card" shadow="hover" @click="goToCreate">
            <div class="feature-content">
              <div class="feature-icon">
                <el-icon><Camera /></el-icon>
              </div>
              <h3>生成写真</h3>
              <p>上传照片，一键生成专属写真</p>
              <el-button type="primary" class="feature-btn">立即体验</el-button>
            </div>
            <div class="feature-bg"></div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="feature-card" shadow="hover" @click="goToReference">
            <div class="feature-content">
              <div class="feature-icon">
                <el-icon><PictureFilled /></el-icon>
              </div>
              <h3>生成参考图</h3>
              <p>AI智能推荐写真风格与姿势</p>
              <el-button type="primary" class="feature-btn">开始创作</el-button>
            </div>
            <div class="feature-bg"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 套餐展示区 -->
    <div class="pricing-section">
      <h2 class="section-title">套餐价格</h2>
      <el-row :gutter="20">
        <el-col :span="8" v-for="(plan, index) in pricingPlans" :key="index">
          <el-card class="pricing-card" :class="{ 'popular': plan.popular }" shadow="hover">
            <div class="pricing-header">
              <h3>{{ plan.name }}</h3>
              <div class="price">¥{{ plan.price }}</div>
              <div class="period">{{ plan.period }}</div>
            </div>
            <div class="pricing-features">
              <ul>
                <li v-for="(feature, i) in plan.features" :key="i">{{ feature }}</li>
              </ul>
            </div>
            <el-button type="primary" @click="goToPricing">立即购买</el-button>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Camera, PictureFilled } from '@element-plus/icons-vue'

const router = useRouter()

const showcaseItems = ref([
  {
    imageUrl: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853',
    title: '古风写真'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    title: '现代写真'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f',
    title: '艺术写真'
  }
])

const pricingPlans = ref([
  {
    name: '体验套餐',
    price: 29,
    period: '月',
    features: ['每月10张AI写真', '基础风格选择', '标准分辨率'],
    popular: false
  },
  {
    name: '精选套餐',
    price: 69,
    period: '月',
    features: ['每月30张AI写真', '全部风格选择', '高清分辨率', '优先生成'],
    popular: true
  },
  {
    name: '专业套餐',
    price: 129,
    period: '月',
    features: ['每月100张AI写真', '全部风格选择', '超高清分辨率', '专属客服'],
    popular: false
  }
])

const goToCreate = () => router.push('/create')
const goToReference = () => router.push('/reference')
const goToPricing = () => router.push('/pricing')
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.hero-section {
  margin-bottom: 60px;
}

.main-carousel {
  width: 100%;
}

.carousel-content {
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.features-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  margin-bottom: 60px;
}

.pricing-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background: white;
}

.carousel-content {
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.carousel-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
}

.brand-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-family: 'STXingkai', 'STKaiti', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.brand-slogan {
  font-size: 1.5rem;
  opacity: 0.9;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #333;
  font-family: 'STXingkai', 'STKaiti', serif;
}

.features-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 60px;
}

.feature-card {
  height: 300px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.feature-content {
  position: relative;
  z-index: 2;
  padding: 30px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.feature-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #1a1a1a, #4a4a4a);
  opacity: 0.9;
  transition: transform 0.3s;
}

.feature-card:hover .feature-bg {
  transform: scale(1.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #409EFF;
}

.feature-btn {
  margin-top: 20px;
}

.pricing-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
}

.pricing-card {
  text-align: center;
  padding: 30px;
  transition: transform 0.3s;
}

.pricing-card:hover {
  transform: translateY(-10px);
}

.pricing-card.popular {
  border: 2px solid #409EFF;
  position: relative;
}

.pricing-card.popular::before {
  content: '推荐';
  position: absolute;
  top: 0;
  right: 0;
  background: #409EFF;
  color: white;
  padding: 5px 15px;
  border-bottom-left-radius: 15px;
}

.pricing-header h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
}

.price {
  font-size: 2.5rem;
  color: #409EFF;
  margin: 15px 0;
}

.pricing-features {
  margin: 20px 0;
}

.pricing-features ul {
  list-style: none;
  padding: 0;
}

.pricing-features li {
  margin: 10px 0;
  color: #666;
}

@media (max-width: 768px) {
  .brand-title {
    font-size: 2.5rem;
  }
  
  .brand-slogan {
    font-size: 1.2rem;
  }
  
  .feature-card {
    margin-bottom: 20px;
  }
}
</style>