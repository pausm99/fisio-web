import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

import router from './router/index';

import "./assets/css/main.css";

// import translations
import en from "./locales/en.json";
import es from "./locales/es.json";
import cat from "./locales/cat.json";

const getStoredLanguage = () => {
  const selectedLanguage = localStorage.getItem("language");
  return selectedLanguage || "es";
};

// configure i18n
const i18n = createI18n({
  locale: getStoredLanguage(),
  fallbackLocale: "es",
  messages: { es, cat, en },
});

// create and start the app
const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");

setTitleAndDescription(getStoredLanguage());

document.getElementById("language-selector")?.addEventListener("change", (event) => {
  const newLanguage = (event.target as HTMLSelectElement).value;
  localStorage.setItem("language", newLanguage);
  setTitleAndDescription(newLanguage);
});

function setTitleAndDescription(lang: string) {
  
  const jsonPath = import.meta.env.MODE === 'development' ? `src/locales/${lang}.json` : `locales/${lang}.json`;

  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      
      var pageTitle = document.getElementById('title');
      var metaDescription = document.querySelector('meta[name="description"]');

      pageTitle!.innerHTML = data.titol;
      metaDescription?.setAttribute('content', data.metaDescription);

      document.documentElement.lang = lang;
    });
}






