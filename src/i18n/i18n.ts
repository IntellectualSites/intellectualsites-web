import { createI18n } from "vue-i18n";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import messages from "@intlify/vite-plugin-vue-i18n/messages";

export default createI18n({
  legacy: false,
  locale: window.navigator.language.includes("-")
    ? window.navigator.language.split("-")[0]
    : window.navigator.language,
  fallbackLocale: "en",
  globalInjection: true,
  messages,
});
