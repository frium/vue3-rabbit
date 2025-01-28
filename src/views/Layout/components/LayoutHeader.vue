<script setup>
import { getCategoryAPI } from '@/apis/layout';
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const categoryList = ref([]);
const getCategory = async () => {
  const res = await getCategoryAPI();
  categoryList.value = res.result;
}
onMounted(() => {
  getCategory()
})
</script>

<template>
  <div class="container">
    <img src="@/assets/images/logo.png" alt="">
    <ul>
      <li v-for="category in categoryList" :Key="category.id">
        <RouterLink to="/">{{ category.name }}</RouterLink>
      </li>
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
    margin-right: 28vw;

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
