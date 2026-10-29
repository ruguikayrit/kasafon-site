const copy = {
  tr: {
    title: "KasaFON — Yeni yüzüyle hazırlanıyor",
    description: "KasaFON yeni yüzüyle hazırlanıyor. Kısa süre sonra buradayız.",
    heading: "KasaFON yeni yüzüyle hazırlanıyor...",
    lead: "Kısa süre sonra buradayız...",
    lang: "Dil"
  },
  en: {
    title: "KasaFON — A new look is on the way",
    description: "KasaFON is being prepared with a new look. We'll be here shortly.",
    heading: "KasaFON is being prepared, with a new look...",
    lead: "We'll be here shortly...",
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
