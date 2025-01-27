<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

</script>

<template>
  <div class="show">
    <h3>{{ title }}</h3>

    <slot></slot>

  </div>
</template>

<style scoped lang="scss">
.show {
  background: rgb(234, 213, 213);
  height: 200px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5%;




  h3 {
    margin: 5% 0 0 0;
    display: block;
    text-align: center;
    font-size: 15px;
    color: rgb(0, 0, 0);
  }

}
</style>
