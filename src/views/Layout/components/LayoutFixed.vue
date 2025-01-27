<script setup>
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <div class="container">
    <img src="@/assets/images/logo.png" alt="">
    <ul>
      <li>首页</li>
      <li>居家</li>
      <li>美食</li>
      <li>服饰</li>
    </ul>
    <el-input v-model="input2" style="width: 240px" placeholder="select" :suffix-icon="Search" />

  </div>



</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 36vw;

    li {
      font-size: 14px;
      margin: 15px;
    }

  }

  img {
    width: 10vw;
  }
}
</style>
