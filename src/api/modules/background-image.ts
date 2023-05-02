import { createClient } from "pexels";
const lycPexelsApiKey = "idys70aBVzZzCAwPhA6aVbem5YvRIokZFtbWMQGe3vGjvR0XhxLXt2Z7"
const client = createClient(lycPexelsApiKey);

/**
 * 取得隨機頁碼
 * @returns {Number}
 */
const getRandomInt = (): number => Math.floor(Math.random() * 10);

export default {
  /**
   * 取得首頁背景圖片清單
   * 
   * @returns {Promise}
   */
  listImage() {
    return client.photos.search({
      query: "taiwan",
      per_page: 10,
      page: getRandomInt(),
      orientation: "landscape",
    });
  },
};
