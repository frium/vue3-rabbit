<script setup>
import { getHotGoodsAPI } from '@/apis/home';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  type: {
    type: Number,
    require: true
  }
})
const route = useRoute();
const hotData = ref([]);
const getHotGoods = async () => {
  const res = await getHotGoodsAPI({
    id: route.params.detailId,
    type: props.type
  });
  hotData.value = res.result;
};
onMounted(() => {
  getHotGoods();
});
</script>

<template>
  <div class="hot-detail">
    <div class="title">
      <span v-if="type === 1">24小时热榜</span>
      <span v-else>一周热榜</span>
    </div>
    <RouterLink to="/" v-for="data in hotData" :key="data.id">
      <div class="detail">
        <img :src="data.picture" alt="">
        <ul>
          <li>{{ data.title }}</li>
          <li class="des">{{ data.alt }}</li>
        </ul>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.hot-detail {
  width: 300px;

  .title {
    background: orangered;
    color: wheat;
    padding: 10px;
    margin-bottom: 4px;
  }

  .detail {
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
