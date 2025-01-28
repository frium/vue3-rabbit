<script setup>
import { onMounted, ref } from 'vue';
import HomeGoodsShow from './HomeGoodsShow.vue';
import { getHotGoodsAPI } from '@/apis/home';
const hotGoods = ref([]);
const getHotGoods = async () => {
  const res = await getHotGoodsAPI();
  hotGoods.value = res.result;
  console.log(hotGoods.value);

}
onMounted(() => {
  getHotGoods()
})
</script>

<template>
  <HomeGoodsShow v-if="!isLoading" :goodsArray="hotGoods" :title="'火爆商品'" :smallTitle="'真火爆'"></HomeGoodsShow>


</template>

<style scoped></style>
