import { App } from "vue";
import animateOnScrollDirective from "./animate/animate-on-scroll";
import intersectionDirective from "./intersection/intersection";

export default function install(Vue: App): void {
  Vue.directive("animate-on-scroll", animateOnScrollDirective);
  Vue.directive("intersection", intersectionDirective);
}
