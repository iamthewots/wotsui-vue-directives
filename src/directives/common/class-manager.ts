import { DirectiveBinding } from "vue";
import { ClassManager } from "wotsui-api";
import { Options } from "wotsui-api/dist/ClassManager/types";

export default function parseClassManagerOptions(
  binding: DirectiveBinding
): Options {
  const opt = ClassManager.parseOptions(binding.value);
  opt.queue = !!binding.modifiers.queue;
  if (binding.modifiers.children) {
    opt.target = 1;
  }
  return opt;
}

export function getClassName(binding: DirectiveBinding): string {
  if (typeof binding.value === "string") {
    return binding.value;
  }
  if (typeof binding.value === "object" && typeof binding.value.className === "string") {
    return binding.value.className;
  }
  return "";
}
