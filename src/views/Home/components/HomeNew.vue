<script setup>
import { onMounted, ref } from 'vue';
import HomeGoodsShow from './HomeGoodsShow.vue';
import { getNewGoodsAPI } from '@/apis/home';
const newGoods = ref([]);
const getNewGoods = async () => {
  const res = await getNewGoodsAPI();
  newGoods.value = res.result;
}
onMounted(() => {
  getNewGoods()
})
</script>

<template>
  <HomeGoodsShow :goodsArray="newGoods" :title="'新鲜好物'" :smallTitle="'真新鲜'"></HomeGoodsShow>
</template>

<style scoped></style>
