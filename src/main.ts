import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";

const app = createApp(App);

// https://stackoverflow.com/a/64698630/12620913 - StackOverflow <3
app.directive("click-outside", {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event: MouseEvent) => {
      if (!(el == event.target || el.contains(event.target))) {
        const val = binding.value;
        if (typeof val == "function") {
          return val();
        }
        console.error(
          "binding value is not a function - instead " + typeof val
        );
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
});
app.use(router);

app.mount("#app");
