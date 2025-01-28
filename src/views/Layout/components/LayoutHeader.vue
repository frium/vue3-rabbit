<script setup>
import { Search } from '@element-plus/icons-vue'
import { RouterLink } from 'vue-router';
import { useCategoryStore } from '@/stores/category';
const categoryStore = useCategoryStore();
</script>

<template>
  <div class="header-sticky">
    <div class="container">
      <img src="@/assets/images/logo.png" alt="">
      <ul>
        <li v-for="category in categoryStore.categoryList" :Key="category.id">
          <RouterLink to="/">{{ category.name }}</RouterLink>
        </li>
      </ul>
      <el-input v-model="input2" style="width: 240px" placeholder="select" :suffix-icon="Search" />
    </div>
  </div>



</template>

<style scoped lang="scss">
.header-sticky {

  position: sticky;
  top: 0;
  z-index: 100000;



  .container {
    background: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 15vw;

      li {
        font-size: 14px;
        margin: 15px;
      }

    }

    img {
      width: 10vw;
    }
  }
}
</style>
