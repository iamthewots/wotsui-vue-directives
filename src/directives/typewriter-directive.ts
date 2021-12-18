import { DirectiveBinding } from "vue";
import { IntersectionManager, Typewriter } from "wui-api";
import {
    expandIntersectionCallbacks,
    parseIntersectionManagerSettings,
} from "./composables/use-intersection-manager";
import { parseTypewriterSettings } from "./composables/use-typewriter";

export default function typewriterDirective(
    el: Element,
    binding: DirectiveBinding
) {
    const typewriterSettings = parseTypewriterSettings(binding);
    const typewriter = new Typewriter(typewriterSettings);
    typewriter.initElement(el);
    const intersectionManagerSettings =
        parseIntersectionManagerSettings(binding);
    expandIntersectionCallbacks(
        intersectionManagerSettings,
        (entry: IntersectionObserverEntry) => typewriter.writeText(el),
        (entry: IntersectionObserverEntry) => typewriter.clearText(el)
    );
    const intersectionManager = new IntersectionManager(
        intersectionManagerSettings
    );
    intersectionManager.observe(el);
}
