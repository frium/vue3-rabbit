<script setup>
import HomeGoodsImageShow from './HomeGoodsImageShow.vue';
const propos = defineProps({
  title: {
    type: String,
    required: true
  },
  smallTitle: {
    type: String,
    required: true
  },
  goodsArray: {
    type: Array,
    required: true
  },

})



</script>

<template>
  <div class="container">
    <div class="title">
      <span>{{ title }}</span>
      <span> {{ smallTitle }}</span>
    </div>
    <a href=""></a>
    <div class="images">
      <RouterLink v-for="goods in goodsArray" :key="goods.id" :to="`/detail/${goods.id}`">
        <HomeGoodsImageShow :goods="goods"></HomeGoodsImageShow>
      </RouterLink>

    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 10px;
}

.images {
  display: flex;
  justify-content: space-between;

}


span:nth-of-type(1) {
  font-size: 30px;
  margin: 10px;

}

span:nth-of-type(2) {
  font-size: 16px;
  margin: 0 0 0 40px;

}

.images> :not(:first-child) {
  margin-left: 20px;
}
</style>
