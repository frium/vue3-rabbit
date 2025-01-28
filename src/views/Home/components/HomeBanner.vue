<script setup>
import { onMounted, ref } from 'vue';
import HomeCategoryList from './HomeCategoryList.vue'
import { getBannerAPI } from '@/apis/home';
const images = ref([])
const getBanner = async () => {
  const res = await getBannerAPI();
  images.value = res.result;
  console.log(images);

}
onMounted(() => {
  getBanner();
})
</script>

<template>
  <div class="container">
    <div class="category-list">
      <HomeCategoryList></HomeCategoryList>
    </div>
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
  position: relative;

  .category-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 18vw;
    height: 100%;
    z-index: 1;
  }
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
