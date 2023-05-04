<script setup lang="ts">
import api from "@/api";
import { useAttractionStore } from "@/stores";
import { reactive, onMounted } from "vue";
const store = useAttractionStore();
import { RawAttract, Attract } from "@/constant";
const result = reactive({ list: [] as Array<Attract> });

function formatAttract(rawData: RawAttract): Attract {
  const { ScenicSpotID, Picture, ScenicSpotName, Description, City } = rawData;

  return {
    id: ScenicSpotID,
    url: Picture.PictureUrl1,
    alt: Picture.PictureDescription1,
    name: ScenicSpotName,
    description: Description,
    tags: [City].concat(
      Object.keys(rawData)
        .filter((key) => key.includes("Class"))
        .map((key) => rawData[key])
    ),
  };
}

function formatAttractList(rawList: Array<RawAttract>): Array<Attract> {
  return rawList.map((item: RawAttract): Attract => formatAttract(item));
}

function getList() {
  store.listAttractions().then((res) => {
    const { data } = res;
    console.log(data);
    result.list = formatAttractList(data);
  });
}

function handlePrev() {}

onMounted(() => {
  getList();
  // result.list = formatAttractList([]);
});
</script>

<template>
  <el-container class="result__panel">
    <el-main>
      <el-row :gutter="16">
        <el-col
          v-for="item in result.list"
          :key="item.id"
          :xs="24"
          :sm="12"
          :md="8"
          style="margin-bottom: 16px"
        >
          <el-card :body-style="{ padding: '8px' }">
            <el-image
              style="width: 100%; height: 200px"
              :src="item.url"
              :alt="item.alt"
              fit="cover"
            />
            <div>
              <span>{{ item.name }}</span>
            </div>
            <div>
              {{ item.tags }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>

    <h1>
      <el-button :disabled="store.page <= 0" @click="handlePage(-1)">prev</el-button>
      {{ store.page }}
      <el-button :disabled="store.page <= 0" @click="handlePage(+1)">next</el-button>
    </h1>
  </el-container>
</template>

<style lang="scss" scoped>
.result {
  &__panel {
    width: 100%;
    max-width: 1000px;
    flex-direction: column;
    height: calc(100vh - 60px);
    overflow-y: auto;
    margin: 0px auto;
  }
}
</style>
