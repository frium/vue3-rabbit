<script setup>
import HomeProductDetail from '@/views/Home/components/HomeProductDetail.vue'
import { getCategoryListAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const goodsList = ref([]);
const reqData = ref({
  categoty: route.params.subId,
  page: 1,
  pageSize: 20,
  sortField: 'publisTime'
})
const getGoodList = async () => {
  const res = await getCategoryListAPI(reqData.value);
  goodsList.value = res.result.items;
}
onMounted(() => {
  getGoodList();
})

const sortFieldChang = () => {
  getGoodList();
}
const disabled = ref(false);
const load = async () => {
  reqData.value.page++;
  const res = await getCategoryListAPI(reqData.value);
  if (res.result.items.length === 0) disabled = true;
  goodsList.value = [...goodsList.value, ...res.result.items]
}
</script>

<template>
  <div class="sort-field">
    <el-tabs v-model="reqData.sortField" class="demo-tabs" @tab-change="sortFieldChang">
      <el-tab-pane label="最新商品" name="publisTime"></el-tab-pane>
      <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
      <el-tab-pane label="最多评论" name="evaluateNum"></el-tab-pane>
    </el-tabs>
  </div>
  <div class="goods" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
    <HomeProductDetail v-for="goods in goodsList" :key="goods.id" :goods="goods"></HomeProductDetail>
  </div>
</template>

<style scoped lang="scss">
.sort-field {
  margin-top: 9px;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;
  gap: 5px;
}
</style>
