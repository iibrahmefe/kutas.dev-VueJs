<template>
  <div class="border-b border-neutral-900 pb-4">
    <h2 class="text-center text-4xl font-bold p-6">Hakkımda</h2>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/2 lg:p-8">
        <div
          class="flex items-center justify-center mb-5 lg:h-full lg:w-full mx-auto"
        >
          <img
            src="https://ibrahmefe-dev.vercel.app/assets/lh4-DVQSuqSw.jpg"
            alt="İbrahim Efe Kutas"
            class="rounded mx-auto hover:cursor-pointer"
          />
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex items-center">
        <div class="flex justify-center items-start">
          <p
            class="lg:p-10 lg:text-base text-justify text-sm"
            v-html="desc"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descLink: "",
      desc: `Merhaba, adım İbrahim Efe Kutas.
      İstanbul Gelişim Üniversitesinde Web Tasarım ve Kodlama 
      bölümünden mezun oldum. Mezuniyetimden bu yana frontend 
      development alanında aktif olarak çalışmalar gerçekleştiriyorum.
<span class="text-red-500">HTML</span>
<span class="text-blue-600">CSS</span>,
<span class="text-yellow-400">JavaScript</span>,
<span class="text-blue-400">React</span>,
<span class="text-green-500">Vue</span>,
<span class="text-blue-600">Sql</span>,
      gibi popüler teknolojilerde 
      bilgiye sahibim. Özellikle frontend development üzerinde 
      odaklanarak, kullanıcı dostu ve etkileyici web arayüzleri
       oluşturma konusunda deneyim kazandım. Bu süreçte, Atatürk, Tarih,
        Bilim, Felsefe, Mitoloji ve Türk Tarihi gibi 
        konularda bilgi sunan <a href="https://learnhist.com.tr" target="_blank" class="text-white bg-blue-600 px-1 py-px rounded-sm hover:bg-blue-500 transition-colors">Learnhist</a> projesi gibi kapsamlı projelerde yer aldım. Learnhist, kullanıcılara bilgi verme hizmeti sunan ve bu konular üzerine odaklanan bir platformdur. Hem frontend hem de backend tarafında görev alarak, teknik bilgilerimi ve problem çözme becerilerimi geliştirme fırsatı buldum. Yeni teknolojilere ve gelişmelere açık bir şekilde yaklaşarak, sürekli olarak kendimi yenilemeye ve geliştirmeye devam ediyorum. Takım çalışmasına uyumlu, iletişim becerileri kuvvetli ve proaktif bir yaklaşıma sahibim. Amacım, kullanıcı odaklı çözümler üreterek ve teknoloji dünyasındaki en son trendleri takip ederek, web geliştirme alanında kariyerimi ilerletmek.`,
    };
  },
};
</script>