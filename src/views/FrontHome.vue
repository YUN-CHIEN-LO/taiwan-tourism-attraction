<script setup lang="ts">
import api from "@/api";
import { useRouter } from "vue-router";
import { reactive, onMounted, ref } from "vue";
import FrontSearchPanel from "@/components/FrontSearchPanel.vue";

// 使用路由
const router = useRouter();

// 圖片清單
const backgroundImages = reactive({ list: [] });
// 當前捲動位置
const currentScrollOffset = ref(0);
// 是否展開篩選表單
const isShowSearch = ref(false);
// 頁面加載中
const isLoading = ref(true);

/**
 * 當觸發捲動事件
 *
 * @param {Event} event - 捲動事件
 */
function handleScroll(event: Event) {
  const target = event.currentTarget as HTMLElement;
  // 判斷是否展開篩選表單
  isShowSearch.value = target?.scrollTop > currentScrollOffset.value;
  // 更新當前捲動位置
  currentScrollOffset.value = target?.scrollTop ?? 0;
}

/**
 * 送出篩選條件
 */
function handleSubmit() {
  router.push({
    name: "frontResult",
    query: { tab: "attraction" },
  });
}

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
  <el-container
    v-loading="isLoading"
    :class="['home__panel', { 'is-open': isShowSearch }]"
    @scroll="handleScroll($event)"
  >
    <el-main>
      <el-carousel
        height="100vh"
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
      <div class="home__wrapper">
        <div class="home__header">
          <div class="home__shadow"></div>
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
      <FrontSearchPanel v-model="isShowSearch" @submit="handleSubmit" />
    </el-main>
    <div class="scroll-div"></div>
  </el-container>
</template>

<style lang="scss" scoped>
.home {
  &__panel {
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
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
        filter: grayscale(50%);
      }
    }
    &.is-open {
      & .home__shadow {
        transform: translate(0%, 0%) rotate(0deg);
        width: 100vw;
        height: 100vh;
      }
      & .home__header > h1 {
        opacity: 0.3;
      }
      & .el-image {
        filter: grayscale(50%) blur(4px);
      }
    }
  }
  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% + 100px);
    display: flex;
  }
  &__header {
    width: 100%;
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
    background-color: rgba(#000, 0.5);
    top: 0%;
    left: 0%;
    transform-origin: center center;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.3s ease-in-out;
  }
}

.scroll-div {
  width: 100%;
  height: 24px;
  flex-shrink: 0;
}
</style>
