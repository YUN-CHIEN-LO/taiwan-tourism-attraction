<script setup lang="ts">
import api from "@/api";
import { reactive, onMounted, ref } from "vue";
</script>

<template>
  <div class="front-home">
    <div class="front-home__header">
      <div class="front-home__shadow"></div>
      <h1>
        TAIWAN
        <h3>
          EXPLORE<br />
          YOUR<br />
          TRAVEL
        </h3>
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.front-home {
  height: $frame-height;
  width: 100vw;
  display: flex;
  height: $frame-offset;
  transform: translateY(calc(-1 * calc($frame-height)));
  &__header {
    width: 100vw;
    position: relative;
    & h1 {
      transition: opacity 0.3s ease-in-out;
      position: absolute;
      margin: 0px;
      top: 24px;
      left: 24px;
      line-height: 1;
      font-size: 12vw;
      font-weight: 700;
      color: #fff;
    }
    & h3 {
      font-size: 8vw;
    }
  }
  &__shadow {
    position: absolute;
    width: 100vw;
    height: 100vw;
    background-color: rgba(#000, 0.3);
    top: 0%;
    left: 0%;
    transform-origin: center center;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.3s ease-in-out;
  }
}
</style>
