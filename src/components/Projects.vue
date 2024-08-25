<template>
  <div class="border-b border-neutral-700 pb-4">
    <h2 class="text-center my-20 text-4xl font-bold">Projeler</h2>

    <div
      v-for="(item, index) in projectLists"
      :key="index"
      class="flex mb-10 flex-wrap lg:justify-center lg:gap-20"
    >
      <div class="w-full lg:w-1/4">
        <div class="flex items-center justify-between">
          <p
            class="mb-2 font-bold text-white bg-clip-text text-xl text-transparent"
          >
            {{ item.name }}
          </p>
          <span
            v-if="item.status"
            :class="[
              'text-[14px] px-4 mb-2 h-7 flex items-center justify-center text-nowrap rounded-md text-white',
              statusColors[item.status],
            ]"
          >
            {{ item.status }}
          </span>
        </div>
        <a :href="item.link" target="_blank">
          <img :src="item.image" :alt="item.name" class="flex-1" />
        </a>
        <p class="text-lg mt-2">{{ item.description }}</p>
      </div>
      <div class="w-full max-w-xl lg:w-3/4 my-3 lg:px-12">
        <h6 class="mb-6">
          <span class="text-xl font-semibold text-purple-100"
            >Kullanılan Teknolojiler</span
          >
        </h6>
        <div class="flex text-center flex-1 gap-5 mt-4 flex-wrap">
          <span
            v-for="(tech, techIndex) in item.tech"
            :key="techIndex"
            :class="[
                'p-2 px-4 rounded-sm text-white', TechColors[tech]
            ]"
            class="p-2 px-4 rounded-sm"
            >{{ tech }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Learnhist from "../assets/Learnhist-Resim.png";
import Kutasdev from "../assets/kutas.dev.png";
import Youtube from "../assets/Youtube-wallpaper.png";
import LandingPage from "../assets/Landing-Page.png";
import NewSite from "../assets/News-Site.png";
import ProfilPage from "../assets/Profil-Page.png";

export default {
  data() {
    return {
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
      },
      statusColors: {
        Hazırlanıyor: "bg-green-500",
        Tamamlandı: "bg-blue-500",
      },
      projectLists: [
        {
          name: "Learnhist",
          description:
            "LearnHist: Atatürk, Türk Tarihi, Tarih, Bilim, Felsefe, Mitoloji, Sanat, Evrim",
          link: "https://www.learnhist.com.tr/",
          image: Learnhist,
          tech: ["Html", "Css", "Bootstrap", "JavaScript", "PHP", "DriftChat"],
          status: "Tamamlandı",
        },
        {
          name: "Kutas.dev",
          description: "Kişisel Portfolyo, Şuan bu projedesiniz",
          image: Kutasdev,
          tech: [
            "Html",
            "Css",
            "Tailwind",
            "React",
            "ReactMotion",
            "ReactIcons",
          ],
          status: "Tamamlandı",
        },
        {
          name: "Youtube React Clone",
          description: "Youtube web sitesi",
          image: Youtube,
          link: "https://youtube-react-clone-two.vercel.app/",
          tech: [
            "Html",
            "Css",
            "Tailwind",
            "React",
            "ReactIcons",
            "ReactRouterDom",
          ],
          status: "Hazırlanıyor",
        },
        {
          name: "Landing Page",
          description: "Frontend Mentor Challenge",
          link: "https://landing-page-rho-steel.vercel.app/",
          image: LandingPage,
          tech: ["Html", "Css", "JavaScript"],
          status: "Tamamlandı",
        },
        {
          name: "News Web Site",
          description: "Frontend Mentor Challenge",
          link: "https://frontend-exercises-news-site.vercel.app/",
          image: NewSite,
          tech: ["Html", "Css", "JavaScript"],
          status: "Tamamlandı",
        },
        {
          name: "Profile Page",
          description: "Frontend Mentor Challenge",
          link: "https://profil-page.vercel.app/",
          image: ProfilPage,
          tech: ["Html", "Css"],
          status: "Tamamlandı",
        },
      ],
    };
  },
};
</script>
