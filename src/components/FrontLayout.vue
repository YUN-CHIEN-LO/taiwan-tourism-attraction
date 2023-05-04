<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const handleSelect = (key: string, keyPath: string[]) => {
  router.push({
    name: keyPath[0],
    query: key === "frontHome" ? {} : { tab: key },
  });
};
</script>

<template>
  <el-menu mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="frontHome">
      <el-icon><House /></el-icon>
      <span>Home</span>
    </el-menu-item>
    <div class="flex-grow"></div>
    <el-sub-menu index="frontResult">
      <template #title>
        <el-icon><Position /></el-icon>
        Explore
      </template>
      <el-menu-item index="attraction">Scenic Spot</el-menu-item>
      <el-menu-item index="restaurant">Restaurant</el-menu-item>
      <el-menu-item index="hotel">Hotel</el-menu-item>
      <el-menu-item index="activity">Activity</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
