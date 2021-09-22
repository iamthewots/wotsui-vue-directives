import { DirectiveBinding } from "vue";
import { IntersectionManager } from "wotsui-api";
import parseIntManOpt from "../common/intersection-manager";

export default function intersectionDirective(
  el: Element,
  binding: DirectiveBinding
): void {
  const opt = parseIntManOpt(binding);
  const intMan = new IntersectionManager(opt);
  intMan.observe(el);
}
