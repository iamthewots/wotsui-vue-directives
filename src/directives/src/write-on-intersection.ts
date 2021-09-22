import { DirectiveBinding } from "vue";
import { IntersectionManager, Typewriter } from "wotsui-api";
import parseTpwOpt from "../common/typewriter";
import parseIntManOpt from "../common/intersection-manager";
import { Options as IntManOpt } from "wotsui-api/dist/IntersectionManager/types";
import { State } from "wotsui-api/dist/Typewriter/types";

export default function writeOnIntersectionDirective(
  el: Element,
  binding: DirectiveBinding
): void {
  // intersection loop fix
  if (!(el instanceof HTMLElement)) {
    return;
  }
  el.style.minHeight = "1em";

  const tpwOpt = parseTpwOpt(binding);
  const tpw = new Typewriter(tpwOpt);
  tpw.initElement(el);
  const intManOpt: IntManOpt = {
    ...parseIntManOpt(binding),
    intersectionHandler: () => {
      console.log("wait what?");
      tpw.write(el);
    },
    noIntersectionHandler: () => {
      if (tpw._elements_states.get(el) === State.Writing) {
        return;
      }
      tpw.clear(el);
    },
  };
  const intMan = new IntersectionManager(intManOpt);
  intMan.observe(el);
}
