<template>
  <div>Directive playground</div>
  <div class="spacer">We need some space to test here :)</div>
  <div
    id="animate-on-scroll"
    v-animate-on-intersection.children.queue="aosBinding"
  >
    <div class="test-cm">Ciao</div>
    <div class="test-cm">mamma</div>
    <div class="test-cm">guarda</div>
    <div class="test-cm">come mi</div>
    <div class="test-cm">diverto!</div>
  </div>
  <div class="spacer">We need some more space, oh my :)</div>
  <div v-write-on-intersection>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias ratione dolorum cumque nostrum eum in vitae veritatis animi asperiores, praesentium quam eius, repellendus temporibus ab saepe atque explicabo! Numquam!
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const aosBinding = {
      className: "cm",
      interval: 250,
      target: "children",
    };

    return {
      aosBinding,
    };
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
  transition: background-color 0.25s ease-out;
}

.cm {
  background-color: orange;
}
</style>