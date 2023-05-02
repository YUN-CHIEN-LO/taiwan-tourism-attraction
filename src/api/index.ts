import backgroundImage from "@/api/modules/background-image";
import tourismAttraction from '@/api/modules/tourism-attraction';

export default {
  // 首頁背景圖片相關
  ...backgroundImage,
  // 相關旅遊景點
  ...tourismAttraction
};
