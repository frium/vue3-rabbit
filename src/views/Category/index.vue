<script lang="ts" setup>
import { getCategoryAPI } from '@/apis/category';
import { ArrowRight } from '@element-plus/icons-vue'
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getBannerAPI } from '@/apis/home';

const categoryData = ref({})
const route = useRoute();
const images = ref([])
const getBanner = async () => {
  const res = await getBannerAPI(2);
  images.value = res.result;
}
const getCategory = async () => {
  const res = await getCategoryAPI(route.params.id);
  categoryData.value = res.result;
}

onMounted(() => {
  getCategory()
  getBanner();
})

watch(() => route.params.id, () => { getCategory(); })

</script>

<template>
  <div class="container"> <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="block text-center">
      <el-carousel height="400px" motion-blur>
        <el-carousel-item v-for="item in images" :key="item">
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>



<style scoped lang="scss">
.container {
  margin-top: 10px;
}

.block {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
