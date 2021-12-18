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
    settings.intersectionHandler = function (entry: IntersectionObserverEntry) {
        intersectionHandler(entry);
        if (typeof settings.intersectionHandler === "function") {
            settings.intersectionHandler(entry);
        }
    };
    settings.noIntersectionHandler = function (
        entry: IntersectionObserverEntry
    ) {
        noIntersectionHandler(entry);
        if (typeof settings.noIntersectionHandler === "function") {
            settings.noIntersectionHandler(entry);
        }
    };
}
