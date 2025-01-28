<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
</script>

<template>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>



<style></style>
