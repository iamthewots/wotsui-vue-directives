import { DirectiveBinding } from "vue";
import { ClassManager, ClassManagerTarget } from "wui-api";

export function parseClassManagerSettings(binding: DirectiveBinding) {
    const settings = ClassManager.parseSettings(binding);
    settings.queue = !!binding.modifiers.queue;
    if (binding.modifiers.children) {
        settings.target = ClassManagerTarget.Children;
    }
    return settings;
}

export function getClassName(binding: DirectiveBinding) {
    if (typeof binding.value === "string") {
        return binding.value;
    }
    if (
        typeof binding.value === "object" &&
        typeof binding.value.className === "string"
    ) {
        return binding.value.className;
    }
    return "";
}
