import { DirectiveBinding } from "vue";
import { ClassManager, IntersectionManager } from "wotsui-api";
import { Options as ClaManOpt } from "wotsui-api/dist/ClassManager/types";
import { Options as IntManOpt } from "wotsui-api/dist/IntersectionManager/types";
import parseClaManOpt, { getClassName } from "../common/class-manager";
import parseIntManOpt from "../common/intersection-manager";

export interface AnimateOnIntersection extends ClaManOpt {
  className?: string;
}

export default function animateOnIntersectionDirective(
  el: Element,
  binding: DirectiveBinding
): void {
  const className = getClassName(binding);
  const claManOpt = parseClaManOpt(binding);
  const claMan = new ClassManager(el, claManOpt);
  const intManOpt: IntManOpt = {
    ...parseIntManOpt(binding),
    intersectionHandler: () => {
      claMan.add(className);
    },
    noIntersectionHandler: () => {
      claMan.remove(className);
    },
  };
  const intMan = new IntersectionManager(intManOpt);
  intMan.observe(el);
}
