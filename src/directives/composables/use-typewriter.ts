import { DirectiveBinding } from "vue";
import { Typewriter } from "wui-api";

export function parseTypewriterSettings(binding: DirectiveBinding) {
    const settings = Typewriter.parseSettings(binding.value);
    if (!binding.modifiers) return settings;
    if (binding.modifiers.ignorepunctuation) {
        settings.ignorePunctuation = true;
    }
    return settings;
}
