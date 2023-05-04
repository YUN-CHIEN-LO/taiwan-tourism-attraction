<script setup lang="ts">
import { reactive } from "vue";
import { cityOptions } from "@/constants";
import { useAttractionStore } from "@/stores";

const store = useAttractionStore();

// 定義元件屬性
const props = defineProps({
  modelValue: Boolean,
});
// 定義元件事件
const emit = defineEmits(["update:modelValue"]);

// 篩選表單內容
const queryForm = reactive({
  // 城市
  city: "",
  // 關鍵字
  keyword: "",
});

/**
 * 更新 是否展開表單 狀態
 *
 * @param {Boolean} - 是否展開表單
 */
function updateValue(value: boolean) {
  emit("update:modelValue", value);
}

/**
 * 展開/收合 表單顯示狀態
 */
function handleToggleSearch() {
  updateValue(!props.modelValue);
}

function handleSearch() {
  store.listAttractions({
    city: queryForm.city,
    keyword: queryForm.keyword,
  });
}
</script>

<template>
  <div :class="['seach-panel', { 'is-open': props.modelValue }]">
    <el-icon :size="128" color="#fff" @click="handleToggleSearch">
      <LocationFilled />
    </el-icon>
    <el-form size="large" :model="queryForm">
      <h3 style="margin-top: 0">Travel where you want to go, do it now!</h3>
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
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.seach-panel {
  position: absolute;
  bottom: -75%;
  right: 12px;
  background-color: rgba(#fff, 0.3);
  width: calc(100% - 24px);
  box-sizing: border-box;
  max-width: 500px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  height: 75%;
  transition: bottom 0.3s ease-in-out;
  & .el-icon {
    position: absolute;
    top: -88px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .el-form {
    margin: -24px 24px;
    padding: 48px 24px;
    height: 100%;
    border: solid 3px #fff;
    border-radius: 12px;
    & h3 {
      color: #fff;
    }
  }
  &.is-open {
    bottom: 0;
  }
}

@media (min-width: 600px) {
  .seach-panel {
    margin-right: 10vw;
  }
}
</style>
