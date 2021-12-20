import { DirectiveBinding } from "vue";
import {
    ClassManager,
    IntersectionManager,
} from "wui-api";
import {
    getClassName,
    parseClassManagerSettings,
} from "./composables/use-class-manager";
import {
    expandIntersectionCallbacks,
    parseIntersectionManagerSettings,
} from "./composables/use-intersection-manager";

export default function manageClass(el: Element, binding: DirectiveBinding) {
    const className = getClassName(binding);
    if (!className) return;

    const classManagerSettings = parseClassManagerSettings(binding);
    const classManager = new ClassManager(el, classManagerSettings);
    const intersectionManagerSettings =
        parseIntersectionManagerSettings(binding);
    expandIntersectionCallbacks(
        intersectionManagerSettings,
        () => classManager.add(className),
        () => classManager.remove(className)
    );
    const intersectionManager = new IntersectionManager(
        intersectionManagerSettings
    );
    intersectionManager.observe(el);
}
