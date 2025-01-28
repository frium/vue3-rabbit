<script setup>
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore();
</script>

<template>
  <div class="category-list">
    <ul>
      <li v-for="category in categoryStore.categoryList" :key="category.id">
        <a href="">
          <div class="category-name">
            <span>{{ category.name + '&nbsp;&nbsp;&nbsp;' }}</span>
            <span v-if="category.children.length > 0">
              {{ category.children.slice(0, 2).map(child => child.name).join(' ') }}
            </span>
          </div>
          <span class="arrow">></span>
        </a>
      </li>
    </ul>
  </div>
  homeCategory
</template>

<style scoped lang="scss">
.category-list {
  width: 18vw;
  background-color: rgba(34, 31, 31);
  opacity: 0.8;

  ul {
    li {
      padding: 10px 15px;
      font-size: 16px;

      &:hover {
        background-color: $xtxColor;
      }

      a {
        color: antiquewhite;
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

    }
  }
}
</style>
