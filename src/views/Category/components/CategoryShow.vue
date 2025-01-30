<script setup>
const props = defineProps({
  category: {
    type: Object,
    require: true
  }
})

</script>

<template>
  <div class="category-show">
    <a href=""><img :src="category.picture" alt=""></a>
    <span>{{ category.name }}</span>
  </div>
</template>

<style scoped lang="scss">
.category-show {
  width: 150px;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  }

  span {
    margin-top: 5px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
}
</style>
