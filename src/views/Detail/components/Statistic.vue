<script setup>
const props = defineProps({
  title: {
    type: String,
    require: true
  },
  number: {
    type: Number,
    require: true
  },
  des: {
    type: String,
    require: true
  }
})
</script>

<template>
  <div class="statistic">
    <span class="title">{{ title }}</span>
    <span class="number">{{ number }}</span>
    <a href="/"><span>{{ des }}</span></a>
  </div>
</template>

<style scoped lang="scss">
.statistic {
  padding: 0 10px;
  text-align: center;

  .title {
    display: block;
    font-size: 14px;
    color: gray;
  }

  .number {
    display: block;
    font-size: 12px;
    color: rgb(175, 13, 13);
  }

  a {
    display: block;
  }
}
</style>
