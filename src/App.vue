<template>
  <div class="container relative min-h-screen h-full">
    <navbar-component></navbar-component>
    <main-component></main-component>
    <about-component></about-component>
    <projects-component></projects-component>
    <skills-component></skills-component>
    <background-component></background-component>
    
    <!-- Hamburger Menu -->
    <!-- Hamburger Menu -->
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Background from "./components/background.vue";
import Skills from "./components/Skills.vue";

import "./styled/reset.css";
import "./styled/main.css";
import "./styled/animate.css";

export default {
  data(){
    return{
      hamburgerMenu:true
    }
  },
  methods:{
    ToggleMenu(){
this.hamburgerMenu= !this.hamburgerMenu;
    }
  },
  components: {
    "navbar-component": Navbar,
    "main-component": Main,
    "about-component": About,
    "projects-component": Projects,
    "background-component": Background,
    "skills-component": Skills

    // "slider-component": Slider,
    // "main-component": Main,
  },
};
</script>

<style>
body {
  background: #000;
  color: white;
}
.container {
  max-width: 1480px;

  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
}
</style>
