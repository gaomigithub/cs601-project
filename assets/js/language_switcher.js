function en_us(data) {
  window.localStorage.setItem("en_us", JSON.stringify(data));
}
function zh_cn(data) {
  window.localStorage.setItem("zh_cn", JSON.stringify(data));
  var vm = new Vue({
    name: "resume",
    el: "#container",
    data: {
      lang: "zh_cn",
      language: null,
      basicInfo: null,
      experiences: null,
      projects: null,
      education: null,
      skills: null,
      portfolio: null,
      contact: null,
    },
    methods: {
      changeLanguage: function () {
        var zh_cn = "zh_cn";
        var en_us = "en_us";
        if (this.lang == zh_cn) {
          this.lang = en_us;
          this.language = "Chinese";
        } else {
          this.lang = zh_cn;
          this.language = "English";
        }
        var data = window.localStorage.getItem(this.lang);
        if (data != null) {
          data = JSON.parse(data);
          this.basicInfo = data.basicInfo;
          this.experiences = data.experiences;
          this.projects = data.projects;
          this.education = data.education;
          this.skills = data.skills;
          this.portfolio = data.portfolio;
          this.contact = data.contact;
        }
      },
    },
    mounted: function () {
      this.changeLanguage();
    },
  });
}
