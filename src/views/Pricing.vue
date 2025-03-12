<template>
  <div class="pricing-container">
    <div class="studio-background">
      <h1 class="studio-title">悦光宝盒 · 套餐价格</h1>
      
      <div class="pricing-description">
        <p>选择适合您需求的套餐，开始创作专属于您的艺术写真</p>
      </div>
      
      <!-- 客照轮播展示 -->
      <div class="customer-showcase">
        <h2>客照展示</h2>
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="(photo, index) in customerPhotos" :key="index">
            <el-image :src="photo.url" fit="cover" class="carousel-image">
              <template #error>
                <div class="image-slot">加载中</div>
              </template>
            </el-image>
            <div class="photo-caption">
              <span>{{ photo.caption }}</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      
      <el-row :gutter="20" class="pricing-cards">
        <el-col :xs="24" :sm="24" :md="8" v-for="(plan, index) in pricingPlans" :key="index">
          <el-card class="pricing-card" :class="{ 'popular': plan.popular }">
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
            <el-button type="primary" @click="selectPlan(plan)">立即购买</el-button>
          </el-card>
        </el-col>
      </el-row>
      
      <div class="payment-section">
        <h2>充值中心</h2>
        <el-card class="payment-card">
          <el-form :model="paymentForm" label-width="120px">
            <el-form-item label="充值金额">
              <el-input-number v-model="paymentForm.amount" :min="10" :step="10"></el-input-number>
            </el-form-item>
            <el-form-item label="支付方式">
              <el-radio-group v-model="paymentForm.method">
                <el-radio label="wechat">微信支付</el-radio>
                <el-radio label="alipay">支付宝</el-radio>
                <el-radio label="card">银行卡</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitPayment">确认充值</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
    
    <el-dialog v-model="dialogVisible" title="确认订单" width="30%">
      <p>您选择了 <strong>{{ selectedPlan?.name }}</strong> 套餐</p>
      <p>价格: ¥{{ selectedPlan?.price }}/{{ selectedPlan?.period }}</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmOrder">确认支付</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

// 客照数据
const customerPhotos = ref([
  {
    url: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853',
    caption: '古风写真 - 花月夜'
  },
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    caption: '现代写真 - 都市风情'
  },
  {
    url: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f',
    caption: '艺术写真 - 光影之美'
  },
  {
    url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    caption: '时尚写真 - 潮流前沿'
  },
  {
    url: 'https://images.unsplash.com/photo-1622495966027-e0173192c728',
    caption: '复古写真 - 怀旧时光'
  }
])

const pricingPlans = ref([
  {
    name: '基础套餐',
    price: 29,
    period: '月',
    features: [
      '每月10张AI写真',
      '基础风格选择',
      '标准分辨率',
      '电子邮件支持'
    ],
    popular: false
  },
  {
    name: '高级套餐',
    price: 69,
    period: '月',
    features: [
      '每月30张AI写真',
      '全部风格选择',
      '高清分辨率',
      '优先生成',
      '在线客服支持'
    ],
    popular: true
  },
  {
    name: '专业套餐',
    price: 129,
    period: '月',
    features: [
      '每月100张AI写真',
      '全部风格选择',
      '超高清分辨率',
      '最高优先级',
      '专属客服',
      '商业用途授权'
    ],
    popular: false
  }
])

const paymentForm = ref({
  amount: 100,
  method: 'wechat'
})

const dialogVisible = ref(false)
const selectedPlan = ref(null)

const selectPlan = (plan) => {
  selectedPlan.value = plan
  dialogVisible.value = true
}

const confirmOrder = () => {
  ElMessage({
    message: '订单已提交，请完成支付',
    type: 'success'
  })
  dialogVisible.value = false
}

const submitPayment = () => {
  ElMessage({
    message: `已提交${paymentForm.value.amount}元充值请求，请完成支付`,
    type: 'success'
  })
}
</script>

<style scoped>
.pricing-container {
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

.pricing-description {
  text-align: center;
  margin-bottom: 40px;
  color: #666;
  font-size: 1.1rem;
}

/* 客照轮播样式 */
.customer-showcase {
  margin-bottom: 60px;
}

.customer-showcase h2 {
  text-align: center;
  margin-bottom: 30px;
  font-family: 'STXingkai', 'STKaiti', serif;
  color: #333;
}

.carousel-image {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
  text-align: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.pricing-cards {
  margin-bottom: 60px;
}

.pricing-card {
  text-align: center;
  padding: 20px;
  height: 100%;
  transition: transform 0.3s;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #eaeaea;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.pricing-card.popular {
  border: 2px solid #409EFF;
  position: relative;
}

.pricing-card.popular::before {
  content: '热门';
  position: absolute;
  top: 0;
  right: 0;
  background-color: #409EFF;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
}

.pricing-header {
  margin-bottom: 20px;
}

.pricing-header h3 {
  font-family: 'STXingkai', 'STKaiti', serif;
  font-size: 1.5rem;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #409EFF;
  margin: 10px 0;
}

.period {
  color: #999;
}

.pricing-features {
  margin-bottom: 20px;
}

.pricing-features ul {
  list-style: none;
  padding: 0;
}

.pricing-features li {
  margin-bottom: 10px;
  color: #666;
  text-align: left;
  padding-left: 20px;
  position: relative;
}

.pricing-features li::before {
  content: "✓";
  color: #67C23A;
  position: absolute;
  left: 0;
}

.payment-section {
  margin-top: 60px;
}

.payment-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-family: 'STXingkai', 'STKaiti', serif;
  color: #333;
}

.payment-card {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
}

h1, h2 {
  text-align: center;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .studio-title {
    font-size: 2rem;
  }
  
  .carousel-image {
    height: 250px;
  }
}
</style>