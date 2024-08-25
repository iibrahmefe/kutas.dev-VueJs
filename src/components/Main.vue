<template>
  <div class="border-b border-neutral-900 pb-4 lg:pb-35 min-h-screen pt-56">
    <div class="flex flex-wrap h-full">
      <div
        class="left w-full lg:w-1/2 flex lg:items-center justify-center lg:justify-start pb-6"
      >
        <div class="flex flex-col items-center lg:items-start justify-center">
          <h1 class="title pb-4 text-3xl lg:text-4xl lg:mt-16 lg:text-center">
            İbrahim Efe Kutas
          </h1>
          <span
            class="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-2xl text-transparent mb-2"
            >Frontend Developer</span
          >
          <spann
            class="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text lg:text-xl text-transparent"
            >Music Producer</spann
          >
        </div>
      </div>
      <div class="right w-full lg:w-1/2 lg:p-8 h-full">
        <div class="flex justify-center">
          <img
            :src=link
            alt="profil-resmi"
            class="object-cover rounded-full max-h-96 hover:scale-105 transition-all"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: "https://ibrahmefe-dev.vercel.app/assets/efe-BrO4C3u8.jpeg",
    };
  },
};
</script>

<!-- <style scoped>
* {
  box-sizing: border-box;
}
.info {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap-reverse;
  min-height: calc(100vh - 100px);
}

.my-text {
  height: 100%;
  flex: 1 1 49%;
}
.name {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.jobtitle {
  font-size: 1.6rem;
}
.my-photo {
  flex: 1 1 49%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

img {
  display: block;
  border-radius: 999px;
  max-width: 384px;
  max-height: 384px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style> -->
