const copy = {
  tr: {
    title: "KasaFON — Yenileniyoruz",
    description: "Yenileniyoruz. KasaFON’u yeniliyoruz. Yeni haliyle çok yakında yeniden hizmetinizdeyiz.",
    heading: "Yenileniyoruz.",
    lead: "KasaFON’u yeniliyoruz. Yeni haliyle çok yakında yeniden hizmetinizdeyiz.",
    lang: "Dil"
  },
  en: {
    title: "KasaFON — We’re renewing",
    description: "We’re renewing. We are renewing KasaFON. The new version will be with you very soon.",
    heading: "We’re renewing.",
    lead: "We are renewing KasaFON. The new version will be with you very soon.",
    lang: "Language"
  }
};

let lang = localStorage.getItem("kasafon-site-lang") === "en" ? "en" : "tr";

function applyLang() {
  const dict = copy[lang];
  document.documentElement.lang = lang;
  document.title = dict.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", dict.description);
  document.querySelector('[data-i18n="title"]').textContent = dict.heading;
  document.querySelector('[data-i18n="lead"]').textContent = dict.lead;
  document.querySelector(".lang").setAttribute("aria-label", dict.lang);
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", button.getAttribute("data-set-lang") === lang ? "true" : "false");
  });
}

document.querySelectorAll("[data-set-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    lang = button.getAttribute("data-set-lang");
    localStorage.setItem("kasafon-site-lang", lang);
    applyLang();
  });
});

applyLang();
