import axios from "axios";

const ScenicBaseUrl = "https://ptx.transportdata.tw/MOTC";

export default {
  /**
   * 取得旅遊景點清單
   * 
   * @param {Number} page - 頁碼
   * @param {Number} perPage - 單頁筆數
   * @returns {Promise}
   */
  listScenicSpot(page: number = 0, perPage: number = 25) {
    const top = perPage;
    const skip = perPage * page;
    return axios.get(`${ScenicBaseUrl}/v2/Tourism/ScenicSpot`, {
      params: { $top: top, $skip: skip },
    });
  },
};
