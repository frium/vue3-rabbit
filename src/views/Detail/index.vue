<script setup>
import { getDetailAPI } from '@/apis/detail';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Statistic from './components/Statistic.vue'
import GoodsDes from './components/GoodsDes.vue'
import GoodsDetail from './components/GoodsDetail.vue';
import HotDetail from './components/HotDetail.vue';
import ImageShow from './components/ImageShow.vue';
const route = useRoute();
const goods = ref({});
const getGoods = async () => {
  const res = await getDetailAPI(route.params.detailId);
  goods.value = res.result;
}
onMounted(() => {
  getGoods();
})
</script>

<template>
  <div class="container">

    <div class="goods-show">
      <div class="image-show">
        <ImageShow v-if="goods.mainPictures" :image-list="goods.mainPictures"></ImageShow>
      </div>

      <div class="goods-des">
        <GoodsDes :price="goods.price" :oldPrice="goods.oldPrice" :name="goods.name" :des="goods.desc"></GoodsDes>
      </div>
    </div>
    <div class="statisticAll">
      <Statistic title="销量人气" :number="goods.salesCount" des="人气销量"></Statistic>
      <Statistic title="商品评价" :number="goods.commentCount" des="查看评价" class="border-r"></Statistic>
      <Statistic title="收藏人气" :number="goods.collectCount" des="收藏商品" class="border-r"></Statistic>
    </div>

    <div class="bottom">

      <div class="goods-detail">
        <GoodsDetail v-if="goods.details" :pictures="goods.details.pictures" :properties="goods.details.properties">
        </GoodsDetail>
      </div>
      <div class="hot-details">
        <HotDetail :type="1"></HotDetail>
        <HotDetail :type="2"></HotDetail>
      </div>
    </div>

  </div>


</template>

<style scoped lang="scss">
.container {
  padding: 30px;

  .goods-show {
    display: flex;
    justify-content: space-between;
  }

  .statisticAll {
    display: flex;

    .hot-details {
      width: 30px;
    }

    .border-r {
      position: relative;
    }

    .border-r::before {
      content: '';
      position: absolute;
      top: 15%;
      left: 0;
      height: 70%;
      border-left: 2px solid #e6cbcb;
    }
  }

  .bottom {
    display: flex;

    .hot-details {
      margin-top: 40px;
    }
  }
}
</style>
