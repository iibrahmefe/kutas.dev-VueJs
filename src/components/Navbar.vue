<template>
  <nav
    class="flex fixed top-0 left-0 right-0 mx-auto items-center justify-between py-1 shadow-md shadow-white/20 lg:px-10 px-3"
  >
    <div class="flex flex-shrink-0 items-center">
      <a href="/" class="navbarLogo">
        <h1 class="lg:text-3xl font-semibold text-2xl navbarLogo">
          kutas.dev Vue~Js
        </h1></a
      >
    </div>
    <div
      class="icons m-8 flex items-center justify-center gap-4 text-2xl lg:text-4xl">
      <a v-for="link in links" :key="link.url" :target="link.target" :href="link.url" class="cursor-pointer hover:text-white/40 transition-all">
        <component :is="link.icon" class="cursor-pointer flex hover:text-white/40 transition-all"/></a>
   
    </div>
 
  </nav>
</template>

<script>
// icon import

import Icon from "./icons/icon.vue";
import Linkedin from "./icons/linkedin.vue";
import Youtube from "./icons/Youtube.vue";
import Github from "./icons/github.vue";

// icon import

export default {
  // component
  components: {
    Icon,
    Linkedin,
    Youtube,
    Github,
  },
  // component
  data() {
    return {
      links: [
        {
          icon: "Icon", // Bileşen adını büyük harfle yaz.
          url: "https://www.instagram.com/iibrahmefe/",
          target: "_blank",
          text: "Instagram",
        },
        {
          icon: "Linkedin", 
          url: "https://www.linkedin.com/in/ibrahim-efe-kutas-101474279/",
          target: "_blank",
          text: "Linkedin",
        },
        {
          icon: "Youtube", 
          url: "https://www.youtube.com/@medellincodes",
          target: "_blank",
          text: "Youtube",
        },
        {
          icon: "Github", 
          url: "https://www.youtube.com/@medellincodes",
          target: "_blank",
          text: "Github",
        },
      ],
    };
  },
  // data bitis
};
</script>

<style scoped>
nav {
  backdrop-filter: blur(24px);
}
</style>
