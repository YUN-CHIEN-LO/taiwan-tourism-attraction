import axios from "axios";

const ScenicBaseUrl = "https://ptx.transportdata.tw/MOTC";
import { AttractQuery } from "@/constants";

export default {
  /**
   * 取得旅遊景點清單
   *
   * @returns {Promise}
   */
  listScenicSpot(query: AttractQuery) {
    const { page, perPage, keyword, city } = query;
    const top: number = perPage;
    const skip: number = perPage * page;
    return axios.get(`${ScenicBaseUrl}/v2/Tourism/ScenicSpot${city.length ? "/" + city : ""}`, {
      params: {
        $top: top,
        $skip: skip,
        $filter: `contains(ScenicSpotName, '${keyword}')`,
        $format: "JSON",
      },
    });
  },
  /**
   * 取得餐廳清單
   *
   * @returns {Promise}
   */
  listRestaurant(query: AttractQuery) {
    const { page, perPage, keyword, city } = query;
    const top: number = perPage;
    const skip: number = perPage * page;
    return axios.get(`${ScenicBaseUrl}/v2/Tourism/Restaurant${city.length ? "/" + city : ""}`, {
      params: {
        $top: top,
        $skip: skip,
        $filter: `contains(ScenicSpotName, '${keyword}')`,
        $format: "JSON",
      },
    });
  },
  /**
   * 取得住宿清單
   *
   * @returns {Promise}
   */
  listHotel(query: AttractQuery) {
    const { page, perPage, keyword, city } = query;
    const top: number = perPage;
    const skip: number = perPage * page;
    return axios.get(`${ScenicBaseUrl}/v2/Tourism/Hotel${city.length ? "/" + city : ""}`, {
      params: {
        $top: top,
        $skip: skip,
        $filter: `contains(ScenicSpotName, '${keyword}')`,
        $format: "JSON",
      },
    });
  },
  /**
   * 取得活動清單
   *
   * @returns {Promise}
   */
  listActivity(query: AttractQuery) {
    const { page, perPage, keyword, city } = query;
    const top: number = perPage;
    const skip: number = perPage * page;
    return axios.get(`${ScenicBaseUrl}/v2/Tourism/Activity${city.length ? "/" + city : ""}`, {
      params: {
        $top: top,
        $skip: skip,
        $filter: `contains(ScenicSpotName, '${keyword}')`,
        $format: "JSON",
      },
    });
  },
};
