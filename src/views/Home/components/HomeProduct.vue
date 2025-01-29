<script setup>
import { getGoodsAPI } from '@/apis/home';
import { onMounted, ref } from 'vue';
import HomeProductDetail from './HomeProductDetail.vue'
const goodsObject = ref({})
const getGoods = async () => {
  const res = await getGoodsAPI();
  goodsObject.value = res.result[0];
  console.log(goodsObject.value);
}
onMounted(() => {
  getGoods();
})


</script>

<template>
  <div class="container">
    <div class="left">
      <img :src="goodsObject.picture" alt="">
    </div>
    <div class="right">
      <HomeProductDetail v-for="goods in goodsObject.goods" :key="goods.id" :goods="goods" class="product-detail">
      </HomeProductDetail>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 10px;
  display: flex;

  .left {
    flex-basis: 25%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    flex-basis: 75%;
    display: flex;
    flex-wrap: wrap;
  }

  .product-detail {
    flex-basis: calc(25% - 20px);
    margin: 0 10px;

  }

  .product-detail:not(:last-of-type) {
    margin-bottom: 10px;
  }



}
</style>
