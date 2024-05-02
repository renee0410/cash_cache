import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/assets/i18n/en.json';
import zhTw from '@/assets/i18n/zh-tw.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    zhTw: {
      translation: zhTw,
    },
  },
  lng: 'zhTw', // 預設語言
  fallbackLng: 'zhTw', // 找不到翻譯檔時，默認語言
  debug: false, // debug模式
  interpolation: {
    escapeValue: false, // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
  },
});

export default i18n;
