import { DirectiveBinding } from "vue";
import { IntersectionManager, IntersectionManagerSettings } from "wui-api";

export function parseIntersectionManagerSettings(binding: DirectiveBinding) {
    const settings = IntersectionManager.parseSettings(binding.value);
    if (!binding.modifiers) return settings;
    if (binding.modifiers.once) {
        settings.observeOnce = true;
    }
    return settings;
}

export function expandIntersectionCallbacks(
    settings: IntersectionManagerSettings,
    intersectionHandler: (entry: IntersectionObserverEntry) => void,
    noIntersectionHandler: (entry: IntersectionObserverEntry) => void
) {
    const actualIntersectionHandler = settings.intersectionHandler;
    const actualNoIntersectionHandler = settings.noIntersectionHandler;
    settings.intersectionHandler = function (entry: IntersectionObserverEntry) {
        intersectionHandler(entry);
        if (typeof actualIntersectionHandler === "function")
            actualIntersectionHandler(entry);
    };
    settings.noIntersectionHandler = function (
        entry: IntersectionObserverEntry
    ) {
        noIntersectionHandler(entry);
        if (typeof actualNoIntersectionHandler === "function")
            actualNoIntersectionHandler(entry);
    };
}
