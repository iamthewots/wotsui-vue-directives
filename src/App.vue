<template>
  <div>Directive playground</div>
  <div class="spacer">We need some space to test here :)</div>
  <div
    id="animate-on-scroll"
    v-animate-on-scroll.children.queue="{
      className: 'cm',
      interval: 250,
      target: 'children',
    }"
  >
    <div class="test-cm">Ciao</div>
    <div class="test-cm">mamma</div>
    <div class="test-cm">guarda</div>
    <div class="test-cm">come mi</div>
    <div class="test-cm">diverto!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AnimateOnScrollDirective } from "./directives/animate/animate-on-scroll";

export default defineComponent({
  setup() {
    const aosBinding: AnimateOnScrollDirective = {
      className: "cm",
      interval: 250,
      target: "children",
    };

    return aosBinding;
  },
});
</script>


<style lang="scss">
body {
  font-size: 20px;
}

.spacer {
  height: 100vh;
}

#animate-on-scroll > * {
  padding: 10px;
}

.test-cm {
  transition: transform 0.5s ease-out;
}

.cm {
  transform: translateX(10px);
}
</style>