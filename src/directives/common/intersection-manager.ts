import { DirectiveBinding } from "vue";
import { IntersectionManager } from "wotsui-api";
import { Options } from "wotsui-api/dist/IntersectionManager/types";

export default function parseOptions(
  binding: DirectiveBinding
): Options {
  const opt = IntersectionManager.parseOptions(binding.value);
  if (!binding.modifiers) {
    return opt;
  }
  if (binding.modifiers.once) {
    opt.observeOnce = true;
  }
  return opt;
}
