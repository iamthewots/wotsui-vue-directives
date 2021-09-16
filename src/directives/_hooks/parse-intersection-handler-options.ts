import { DirectiveBinding } from "vue";
import { IntersectionHandler } from "wotsui-api";
import { Options } from "wotsui-api/dist/IntersectionHandler/types";

export default function parseIntersectionHandlerOptions(
  binding: DirectiveBinding
): Options {
  const opt = IntersectionHandler.parseOptions(binding.value);
  if (!binding.modifiers) {
    return opt;
  }
  if (binding.modifiers.once) {
    opt.observeOnce = true;
  }
  return opt;
}
