<script setup>
const props = defineProps({
  price: {
    type: String,
    require: true
  },
  oldPrice: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  des: {
    type: String,
    require: true
  }
})
</script>

<template>
  <div class="des">
    <ul>
      <h2>{{ name }}</h2>
      <li>{{ des }}</li>
      <li>
        <span class="price">{{ price + '$' }}</span>
        <span class="oldPrice">{{ oldPrice + '$' }}</span>
      </li>
      <div class="des-bottom">
        <div class="thing">
          <span class="title">促销</span>
          <span>12月 月12 1月2 2月1 啊巴啦啦</span>
        </div>
        <div class="thing">
          <span class="title">服务</span>
          <span>巴啦啦及对外 嗡嗡嗡嗡嗡嗡</span>
          <span> <a href="/"> 了解更多~</a></span>
        </div>
      </div>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.des {

  h2 {
    margin: 10px 0;
  }

  .price {
    font-size: 20px;
    color: brown;
    margin-right: 10px;
  }

  .oldPrice {
    text-decoration: line-through;
    color: gray;
  }

  .des-bottom {
    margin-top: 10px;
    padding: 10px;
    background: rgb(222, 219, 219);

    .thing {
      padding: 5px;

      .title {
        margin-right: 20px;
        color: rgb(148, 133, 133);
      }
    }

    a {
      color: $xtxColor;
    }

  }


  li:nth-of-type(2) {
    margin-top: 10px;
  }
}
</style>
