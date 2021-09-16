import { DirectiveBinding } from "vue";
import { ClassManager, IntersectionHandler } from "wotsui-api";
import { Options as ClassManagerOptions } from "wotsui-api/dist/ClassManager/types";
import { Options as IntersectionHandlerOptions } from "wotsui-api/dist/IntersectionHandler/types";
import parseClassManagerOptions from "../_hooks/parse-class-manager-options";
import parseIntersectionHandlerThreshold from "../_hooks/parse-intersection-handler-threshold";
import parseIntersectionHandlerOptions from "../_hooks/parse-intersection-handler-options";

export interface AnimateOnScrollDirective
  extends ClassManagerOptions,
    IntersectionHandlerOptions {
  className?: string;
}

export default function animateOnScrollDirective(
  el: Element,
  binding: DirectiveBinding
): void {
  const className = getClassName(binding);
  if (className === "") {
    return;
  }
  const claManOpt = parseClassManagerOptions(binding);
  const classManager = new ClassManager(el, claManOpt);

  const threshold = parseIntersectionHandlerThreshold(binding, 0.5);
  const intHandOpt = {
    ...parseIntersectionHandlerOptions(binding.value),
    intersectionHandler: () => {
      classManager.add(className);
    },
    noIntersectionHandler: () => {
      classManager.remove(className);
    },
  };
  const intHand = new IntersectionHandler(threshold, intHandOpt);
  intHand.observe(el);
}

function getClassName(binding: DirectiveBinding) {
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
