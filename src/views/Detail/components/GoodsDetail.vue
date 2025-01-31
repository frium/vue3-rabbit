<script setup>
const props = defineProps({
  properties: {
    type: Object,
    require: true
  },
  pictures: {
    type: Object,
    require: true
  }
})

</script>

<template>
  <div class="detail">
    <h3>商品详情</h3>
    <hr>
    <div class="properties">
      <div class="propertie" v-for="(propertie, index) in properties" :key="index">
        <span>{{ propertie.name + '&nbsp; &nbsp;' }}</span>
        <span class="value">{{ propertie.value }}</span>
      </div>
    </div>
    <div class="pictures">
      <div class="picture" v-for="(picture, index) in pictures" :key="index">
        <img :src="picture" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail {
  margin-top: 10px;

  .properties {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .propertie {
      width: 48%;
      margin-bottom: 10px;
      font-size: 14px;

      span:nth-of-type(1) {
        color: rgb(160, 153, 153);
      }
    }

    .propertie:nth-child(odd):last-child {
      width: 100%;
    }
  }
}
</style>
