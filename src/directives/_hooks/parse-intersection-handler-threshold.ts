import { DirectiveBinding } from "vue";

export default function parseIntersectionHandlerThreshold(
  binding: DirectiveBinding,
  defVal?: number
): number {
  if (
    typeof binding.value === "object" &&
    typeof binding.value.threshold === "number"
  ) {
    return binding.value.threshold;
  }
  return defVal || 1;
}
