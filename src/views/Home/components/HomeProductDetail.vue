<script setup>
const propose = defineProps({
  goods: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="detail">
    <a href=""> <img :src="goods.picture" alt=""></a>
    <span>{{ goods.name }}</span>
    <span>{{ goods.desc }}</span>
    <span>{{ goods.price + '&nbsp;$' }}</span>
  </div>
</template>

<style scoped lang="scss">
.detail {
  margin-top: 5px;
  width: 200px;

  &:hover {
    transform: translate(2px, -2px);
    transition: transform 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  span {
    margin-top: 4px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:nth-of-type(3) {
    text-align: center;
  }

}
</style>
