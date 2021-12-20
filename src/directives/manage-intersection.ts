import { DirectiveBinding } from "vue";
import { IntersectionManager } from "wui-api";
import { parseIntersectionManagerSettings } from "./composables/use-intersection-manager";

export default function manageIntersection(
    el: Element,
    binding: DirectiveBinding
) {
    const settings = parseIntersectionManagerSettings(binding);
    const intersectionManager = new IntersectionManager(settings);
    intersectionManager.observe(el);
}
