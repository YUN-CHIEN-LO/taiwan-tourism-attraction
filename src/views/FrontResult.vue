<script setup lang="ts">
import api from "@/api";
import { useAttractionStore } from "@/stores";
import { reactive, onMounted } from "vue";
const store = useAttractionStore();
const result = reactive({ list: [] });

function getList() {
  store.listAttractions().then((res) => {
    const { data } = res;
    console.log(data);
    result.list = data;
  });
}
onMounted(() => {
  // getList();
});
</script>

<template>
  <el-container class="result__panel">
    <el-main>
      <el-row>
        <el-col
          v-for="item in result.list"
          :key="item.ScenicSpotID"
          :span="8"
          :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{}}</time>
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.result {
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
    }
  }
}
</style>
