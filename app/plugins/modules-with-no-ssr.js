import Vue from "vue";
import Toasted from "vue-toasted";
import VueJsonPretty from "vue-json-pretty";

if (typeof window !== "undefined" && window.Vue) {
  window.Toasted = Toasted;
}

Vue.use(Toasted);
Vue.component("VueJsonPretty", VueJsonPretty);
