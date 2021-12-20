import { App } from "vue";
import manageClass from "./manage-class";
import manageIntersection from "./manage-intersection";
import typewrite from "./typewrite";
export * from "./types";

export default {
    install(app: App) {
        app.directive("manage-class", manageClass);
        app.directive("manage-intersection", manageIntersection);
        app.directive("typewrite", typewrite);
    },
};
