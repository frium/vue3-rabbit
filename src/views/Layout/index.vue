<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category';
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>



<style></style>
