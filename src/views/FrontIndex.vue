<template>
  <div class="front-wrapper" ref="main">
    <FrontBackground class="front-background" />
    <FrontHome />
    <FrontFilter />
    <div class="paper-plane" @click="backToTop">
      <el-icon :size="128" color="#fff">
        <Promotion />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import FrontBackground from "@/views/FrontBackground.vue";
import FrontHome from "@/views/FrontHome.vue";
import FrontFilter from "@/views/FrontFilter.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;
let scroller;

const backToTop = () => {
  scroller = document.getElementById("container");
  scroller.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  scroller = document.getElementById("container");
  ctx = gsap.context((self) => {
    const paperPlane = (self.selector(".paper-plane") ?? [])[0];
    if (paperPlane) {
      gsap.to(paperPlane, {
        css: {
          pointerEvents: "auto",
          transform: "rotate(360deg) scale(0.5)",
          top: "calc(100% - 150px)",
          left: "calc(100% - 150px)",
        },
        scrollTrigger: {
          scroller: scroller,
          trigger: paperPlane,
          start: "top",
          end: "+=100",
          scrub: true,
        },
      });
    }
    const background = (self.selector(".front-background") ?? [])[0];
    if (background) {
      gsap.to(background, {
        css: {
          filter: "grayscale(30%) blur(5px)",
          ["-webkit-filter"]: "grayscale(30%) blur(5px)",
          transform: "scale(1.2)",
        },
        scrollTrigger: {
          scroller: scroller,
          trigger: background,
          start: "center center",
          scrub: true,
        },
      });
    }
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<style scoped lang="scss">
.front-wrapper {
  min-height: calc($frame-height * 2);
}
.front-background {
  position: sticky;
  top: 0px;
}
.paper-plane {
  position: fixed;
  z-index: 2000;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  pointer-events: none;
  -webkit-filter: drop-shadow(12px 12px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(12px 12px rgba(0, 0, 0, 0.7));
}
</style>
