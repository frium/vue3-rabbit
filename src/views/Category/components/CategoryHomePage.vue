<script lang="ts" setup>
import { getCategoryAPI } from '@/apis/category';
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { getBannerAPI } from '@/apis/home';
import CategoryShow from './CategoryShow.vue';

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

  <div class="block text-center">
    <el-carousel height="400px" motion-blur>
      <el-carousel-item v-for="item in images" :key="item">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="category-all">
    <RouterLink v-for="category in categoryData.children" :key="category.id"
      :to="`/category/${$route.params.id}/sub/${category.id}`">
      <CategoryShow :category="category" />
    </RouterLink>
  </div>
</template>



<style scoped lang="scss">
.category-all {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.block {
  margin-top: 10px;

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
