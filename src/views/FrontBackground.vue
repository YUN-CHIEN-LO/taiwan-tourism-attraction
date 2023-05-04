<script setup lang="ts">
import api from "@/api";
import { reactive, onMounted, ref } from "vue";
import FrontSearchPanel from "@/components/FrontSearchPanel.vue";

// 圖片清單
const backgroundImages = reactive({ list: [] });
// 頁面加載中
const isLoading = ref(true);

onMounted(() => {
  // 取得背景圖片清單
  api.background.listImage().then((image) => {
    const { photos } = image ?? [];
    backgroundImages.list = photos ?? [];
    isLoading.value = false;
  });
});
</script>

<template>
  <el-container v-loading="isLoading" class="front-background">
    <el-main>
      <el-carousel
        height="calc(100vh - 60px)"
        arrow="never"
        trigger="click"
        :pause-on-hover="false"
        :interval="10000"
        indicator-position="none"
      >
        <el-carousel-item v-for="image in backgroundImages.list" :key="backgroundImages.id">
          <el-image :src="image.src.large" fit="cover" />
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.front-background {
  height: $frame-height;
  flex-direction: column;
  overflow-y: hidden;
  transform-origin: center bottom;
  & .el-main {
    position: sticky;
    top: 0;
    overflow: hidden;
    height: 100%;
    padding: 0px;
    flex-shrink: 0;
    & .el-image {
      width: 100vw;
      height: 100vh;
    }
  }
}
</style>
