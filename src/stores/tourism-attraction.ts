import { defineStore } from "pinia";
import api from "@/api";
import { AttractQuery as Query, AttractState as State } from "@/constants";

const getDefaultQuery = (): Query => ({
  page: 0,
  perPage: 25,
  city: "",
  keyword: "",
});

export const useAttractionStore = defineStore("attraction", {
  state: (): State => {
    return {
      ...getDefaultQuery(),
    };
  },
  getters: {
    // 景點清單篩選條件
    attractionQuery: (state): Query => ({
      page: state.page,
      perPage: state.perPage,
      city: state.city,
      keyword: state.keyword,
    }),
  },
  actions: {
    /**
     * 取得 景點清單
     *
     * @param {Object} query - 篩選條件
     * @returns {Promise}
     */
    listAttractions(query: Query) {
      return api.attraction
        .listScenicSpot(Object.assign(this.attractionQuery, query))
        .then((res) => {
          console.log(res);
        });
    },
  },
});
