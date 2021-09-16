import { DirectiveBinding } from "vue";
import { IntersectionHandler } from "wotsui-api";
import parseIntersectionHandlerOptions from "../_hooks/parse-intersection-handler-options";
import parseIntersectionHandlerThreshold from "../_hooks/parse-intersection-handler-threshold";

export default function intersectionDirective(
  el: Element,
  binding: DirectiveBinding
): void {
  const threshold = parseIntersectionHandlerThreshold(binding);
  const intHandOpt = parseIntersectionHandlerOptions(binding);
  const intHand = new IntersectionHandler(threshold, intHandOpt);
  intHand.observe(el);
}
