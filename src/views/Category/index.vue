<script lang="ts" setup>
import { getCategoryAPI } from '@/apis/category';
import { ArrowRight } from '@element-plus/icons-vue'
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const categoryData = ref({})
const route = useRoute();


const getCategory = async () => {
  const res = await getCategoryAPI(route.params.id);
  categoryData.value = res.result;
}

onMounted(() => {
  getCategory()
})

watch(() => route.params.id, () => { getCategory(); })

</script>

<template>
  <div class="container">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>



<style scoped lang="scss">
.container {
  margin-top: 15px;
}
</style>
