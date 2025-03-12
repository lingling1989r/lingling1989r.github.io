<template>
  <div class="style-container">
    <el-card class="questionnaire-card">
      <h2 class="title">写真风格偏好问卷</h2>
      
      <el-form :model="formData" label-width="120px">
        <!-- 风格偏好 -->
        <el-form-item label="色调偏好">
          <el-radio-group v-model="formData.colorPreference">
            <el-radio label="warm">暖色调</el-radio>
            <el-radio label="cool">冷色调</el-radio>
            <el-radio label="neutral">中性色</el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- 场景选择 -->
        <el-form-item label="拍摄场景">
          <el-select v-model="formData.scenes" multiple placeholder="请选择">
            <el-option
              v-for="item in sceneOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <!-- 风格强度 -->
        <el-form-item label="风格强度">
          <el-slider
            v-model="formData.styleIntensity"
            :marks="intensityMarks"
            :min="1"
            :max="5"
            show-stops
          />
        </el-form-item>

        <!-- 时间选择 -->
        <el-form-item label="年代偏好">
          <el-date-picker
            v-model="formData.decade"
            type="year"
            placeholder="选择年代"
            value-format="YYYY"
          />
        </el-form-item>

        <el-button
          type="primary"
          @click="handleSubmit"
          class="submit-btn"
          :loading="isSubmitting"
        >
          生成推荐方案
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const formData = ref({
  colorPreference: 'neutral',
  scenes: [],
  styleIntensity: 3,
  decade: '2023'
})

const sceneOptions = [
  { value: 'urban', label: '都市街头' },
  { value: 'nature', label: '自然风光' },
  { value: 'studio', label: '摄影棚' },
  { value: 'vintage', label: '复古场景' }
]

const intensityMarks = {
  1: '柔和',
  3: '适中',
  5: '强烈'
}

const isSubmitting = ref(false)

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    // TODO: 集成推荐算法接口
    ElMessage.success('已根据您的偏好生成3套推荐方案')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.style-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.questionnaire-card {
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 30px;
}

.submit-btn {
  width: 100%;
  margin-top: 20px;
  height: 50px;
  font-size: 16px;
}

.el-slider {
  margin-top: 10px;
}
</style>