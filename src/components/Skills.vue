<template>
  <div class="pb-24">
    <h2 class="text-center text-4xl my-20 font-bold">Yeteneklerim</h2>

    <!-- Frontend -->
    <transition
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        class="flex flex-wrap items-center justify-center gap-4 mt-10 max-w-screen-lg mx-auto"
        v-if="activeSection === 'frontend'"
      >
        <div
          v-for="skill in CodingSkills.frontend"
          :key="skill.Name"
          class="flex items-center hover:opacity-90 transition-colors cursor-pointer"
        >
          <span
            v-for="(tech, techIndex) in skill.tech"
            :key="techIndex"
            :class="[
              'h-32 w-44 text-center flex items-center justify-center  rounded-sm',
              TechColors[tech],
            ]"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </transition>
    <!-- Backend -->
    <transition
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        class="flex flex-wrap items-center justify-center gap-4 mt-10 max-w-screen-lg mx-auto"
        v-if="activeSection === 'backend'"
      >
        <div
          v-for="skill in CodingSkills.backend"
          :key="skill.Name"
          class="flex items-center hover:opacity-90 transition-colors cursor-pointer"
        >
          <span
            v-for="(tech, techIndex) in skill.tech"
            :key="techIndex"
            :class="[
              'h-32 w-44 text-center flex items-center justify-center  rounded-sm ',
              TechColors[tech],
            ]"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </transition>
    <div class="flex w-full items-center gap-4 justify-center mt-20">
      <button @click="showSection('frontend')" class="frontend">
        Frontend
      </button>
      <button @click="showSection('backend')" class="backend">Backend</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: "frontend",
      TechColors: {
        Html: "bg-red-600",
        Css: "bg-blue-600",
        Bootstrap: "bg-purple-600",
        JavaScript: "bg-yellow-500",
        PHP: "bg-indigo-600",
        DriftChat: "bg-blue-600",
        Tailwind: "bg-blue-700",
        React: "bg-blue-400",
        ReactMotion: "bg-purple-600",
        ReactIcons: "bg-red-600",
        ReactRouterDom: "bg-red-500",
        MySQL: "bg-blue-500",
        SQL: "bg-gray-500",
      },
      CodingSkills: {
        frontend: [
          {
            Name: "HTML",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="currentColor" viewBox="0 0 512 512"><path d="M10 12h492v492H10V12zM256 450l139-272H117l139 272zm6-46l-93-182h185l-93 182z"/></svg>',
            tech: ["Html"],
          },
          {
            Name: "CSS",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="currentColor" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm176 396h-44V80h44v348zm98-292c13 0 25.8 2.6 37 7.3 10.4 4.3 19.5 10.5 26.5 18.8 6.8 8.1 10.5 17.8 10.5 27.6s-3.7 19.6-10.5 27.6c-7 8.3-16.1 14.6-26.5 18.8-11.2 4.7-23.8 7.3-37 7.3-13.1 0-25.8-2.6-37-7.3-10.4-4.3-19.5-10.5-26.5-18.8-6.8-8.1-10.5-17.8-10.5-27.6s3.7-19.6 10.5-27.6c7-8.3 16.1-14.6 26.5-18.8 11.2-4.7 23.8-7.3 37-7.3z"/></svg>',
            tech: ["Css"],
          },
          {
            Name: "JavaScript",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="currentColor" viewBox="0 0 512 512"><path d="M96 0h320v512H96V0zm191 369c-12.7 4.6-22.5 8.6-32.2 13.1-6.4 3.5-13.8 8.4-20.8 13.1l-7.7-30.3c7.6-5.7 15.2-11.1 24.3-16.2 11.8-6.9 26.3-10.6 42.2-10.6 24.5 0 38.9 11.4 38.9 30.7v7.2c0 14.1-7.8 24.1-20.1 31.3-4.8 2.9-11.2 5.1-17.7 6.5l-7.7 1.7 2.2 11.2h-44.2l-2.2-11.2 6.3-1.4c12.1-2.7 22.3-7.4 27.9-12.9 4.6-4.4 7.5-9.6 7.5-15.4v-7.2c0-10.4-7.3-15.6-20.2-15.6-8.8 0-17.2 2.3-23.7 5.4-5.3 2.8-10.5 6.5-14.8 10.6-4.7 4.6-8.5 9.7-11 15.3L142 249l13.4-40.2 12.3 16.2c8.4-8.5 17.4-16.3 27.4-22.5 8.5-5.8 16.4-10.4 24.4-13.8 10.1-4.2 20.3-6.5 30.2-6.5 16.3 0 31.5 4.4 43.5 12.4 10.9 7.5 17.4 18.7 17.4 33.3v10.7c0 22.1-12.4 41.8-32.2 51.7z"/></svg>',
            tech: ["JavaScript"],
          },
          {
            Name: "React",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="currentColor" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.9 29.1 16.4 70.4-1.4 110.4-40.1 5.5-4.9 10.9-10 15.7-15.6 3.8 3.8 7.9 7.4 12.2 10.8 46.2 36.5 86.4 53.6 112.6 38.4 24.3-14.6 33.6-59.6 21.4-116.7-1.1-5.6-2.3-11.1-3.7-16.7 7.5-1.8 14.9-3.8 22-5.9 55.3-20.6 96.7-49.1 96.7-81.5 0-30.2-40.8-59.4-96.1-78.6z"/></svg>',
            tech: ["React"],
          },
        ],
        backend: [
          {
            Name: "Php",
            tech: ["PHP"],
          },
          {
            Name: "MySql",
            tech: ["MySQL"],
          },
        ],
      },
    };
  },
  methods: {
    showSection(section) {
      this.activeSection = section;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.frontend {
  backdrop-filter: blur(24px);
  -webkit-box-shadow: inset 0px 0px 5px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 0px 0px 5px 0px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 5px 0px rgba(255, 255, 255, 1);
  padding: 12px 24px;
  border-radius: 14px;
  transition: .4s ;
}

.backend {
  backdrop-filter: blur(24px);
  -webkit-box-shadow: inset 0px 0px 5px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 0px 0px 5px 0px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 5px 0px rgba(255, 255, 255, 1);
  padding: 12px 24px;
  border-radius: 14px;
  color: #fff;
  transition: .4s ;
}
.backend:hover {
  -webkit-box-shadow: inset 0px 0px 7px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 0px 0px 7px 0px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 7px 0px rgba(255, 255, 255, 1);
  scale: 1.05;
}
.frontend:hover{
  -webkit-box-shadow: inset 0px 0px 7px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 0px 0px 7px 0px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 0px 7px 0px rgba(255, 255, 255, 1);
  scale: 1.05;
}
</style>
