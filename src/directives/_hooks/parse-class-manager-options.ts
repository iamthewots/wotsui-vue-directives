import { DirectiveBinding } from "vue";
import { ClassManager } from "wotsui-api";
import { Options } from "wotsui-api/dist/ClassManager/types";

export default function parseClassManagerOptions(
  binding: DirectiveBinding
): Options {
  const opt = ClassManager.parseOptions(binding.value);
  opt.queue = !!binding.modifiers.queue;
  if (binding.modifiers.children) {
    opt.target = "children";
  }
  return opt;
}