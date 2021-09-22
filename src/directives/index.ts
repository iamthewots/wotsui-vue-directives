import { App } from "vue";
import animateOnIntersectionDirective from "./src/animate-on-intersection";
import intersectionDirective from "./src/intersection";
import writeOnIntersectionDirective from "./src/write-on-intersection";

export default function install(Vue: App): void {
  Vue.directive("animate-on-intersection", animateOnIntersectionDirective);
  Vue.directive("intersection", intersectionDirective);
  Vue.directive("write-on-intersection", writeOnIntersectionDirective);
}
