<script setup>
defineProps({
  goods: {
    type: Object,
    required: true
  }

})
console.log(43123);

</script>

<template>
  <div class="image">
    <img :src=goods.picture alt="">

    <span>{{ goods.name }}</span>
    <span>{{ goods.price }}</span>
  </div>
</template>

<style scoped lang="scss">
img {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2%;

}

span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0 !important;
}

span:nth-of-type(1) {
  margin-top: 15px;
}

span:nth-of-type(2) {
  margin-top: 5px;
}
</style>
