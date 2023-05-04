<template>
  <div class="front-filter">
    <div class="front-filter__form">
      <h1>Find Your Next Destination:</h1>
      <el-form-item prop="city">
        <el-select
          clearable
          v-model="queryForm.city"
          style="width: 100%"
          placeholder="Select a city"
        >
          <el-option v-for="city in cityOptions" :key="city" :value="city">
            {{ city }}
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="keyword">
        <el-input v-model="queryForm.keyword" placeholder="Or insert keyword" clearable> </el-input>
      </el-form-item>
      <el-button style="width: 100%" @click="handleSearch">SEARCH</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { cityOptions } from "@/constants";
import { useAttractionStore } from "@/stores";

const store = useAttractionStore();
// 篩選表單內容
const queryForm = reactive({
  city: "", // 城市
  keyword: "", // 關鍵字
});
/**
 * 送出篩選條件
 */
function handleSearch() {
  store.$patch({
    page: 0,
    perPage: 25,
    city: queryForm.city,
    keyword: queryForm.keyword,
  });
}
</script>

<style scoped lang="scss">
.front-filter {
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: $frame-height;
  &__form {
    position: relative;
    background-color: #fff;
    padding: 24px 16px 48px;
    width: 80%;
    min-width: 300px;
    box-shadow: 60px -20px rgba(#000, 0.3);
  }
}
</style>
