import { App } from "vue";
import classManagerDirective from "./class-manager-directive";
import intersectionManagerDirective from "./intersection-manager-directive";
import typewriterDirective from "./typewriter-directive";

export default {
    install(app: App) {
        app.directive("class-manager", classManagerDirective);
        app.directive("intersection-manager", intersectionManagerDirective);
        app.directive("typewriter", typewriterDirective);
    },
};
