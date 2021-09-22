import { DirectiveBinding } from "vue";
import { Typewriter } from "wotsui-api";
import { Options } from "wotsui-api/dist/Typewriter/types";

export default function parseOptions(binding: DirectiveBinding): Options {
  const opt: Options = Typewriter.parseOptions(binding.value);
  if (binding.modifiers.ignorePunctuation) {
    opt.ignorePunctuation = true;
  }
  return opt;
}
