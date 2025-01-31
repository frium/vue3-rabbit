<script setup>
import { useMouseInElement } from '@vueuse/core';
import { ref } from 'vue';
const props = defineProps({
  imageList: {
    type: Array,
    default: () => []
  }
})

const bigImage = ref(props.imageList[0])
const enterHandler = (index) => {
  bigImage.value = props.imageList[index];
}

//鼠标相对位置
const traget = ref(null);
const { elementX, elementY, isOutside } = useMouseInElement(traget);
</script>

<template>
  <div class="image-show">
    <div class="big-image" ref="traget">
      <img :src="bigImage" alt="">
      <div class="layer" :style="{
        left: elementX + 'px',
        top: elementY + 'px',
        opacity: isOutside ? 0 : 1
      }"></div>
    </div>
    <div class="show" :style="{
      backgroundImage: `url(${bigImage})`,
      backgroundPosition: `${-elementX * 2 + 325}px ${-elementY * 2 + 225}px`,
      opacity: isOutside ? 0 : 1
    }"> </div>
    <div class="small-image">
      <img v-for="(image, index) in imageList" :key="index" alt="" :src="image" @mouseenter="enterHandler(index)">
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-show {
  position: relative;
  width: 650px;
  height: 450px;
  display: flex;
  gap: 10px;

  .big-image {
    flex: 0 0 80%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .layer {
      position: absolute;
      width: 230px;
      height: 230px;
      background: rgba(136, 134, 134, 0.5);
      border: 2px solid #a3a1a1;
      pointer-events: none;
      transform: translate(-50%, -50%);
      transition: opacity 0.2s;
      z-index: 2;
    }
  }

  .show {
    top: 0px;
    left: 650px;
    position: absolute;
    background: rgba(220, 220, 220, 0.5);
    width: 368px;
    height: 380px;
    background-repeat: no-repeat;
    background-size: 736px 760px;
    z-index: 3;
  }

  .small-image {
    display: grid;
    grid-auto-rows: minmax(0, 1fr);
    gap: 10px 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      &:hover {
        transform: scale(1.05);
        border: 2px solid $xtxColor;

      }

    }
  }
}
</style>
