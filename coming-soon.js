const copy = {
  tr: {
    title: "KasaFON — Çok yakında",
    description: "KasaFON hazırlanıyor. Kişisel bütçenizi sade ve güvenli bir yerde toplamak için çalışıyoruz. Çok yakında hizmetinizdeyiz.",
    kicker: "Çok yakında",
    heading: "KasaFON hazırlanıyor.",
    lead: "Kişisel bütçenizi tek yerde, sade ve güvenli biçimde toplamak için çalışıyoruz. Site ve uygulama çok yakında hizmetinizde.",
    note: "App Store ve Google Play yayınları da hazırlanıyor.",
    rights: "© 2026 KasaFON",
    lang: "Dil"
  },
  en: {
    title: "KasaFON — Coming soon",
    description: "KasaFON is being prepared. We are building a clear and secure place for your personal budget. We will be with you very soon.",
    kicker: "Coming soon",
    heading: "KasaFON is being prepared.",
    lead: "We are building one clear, secure place for your personal budget. The site and the app will be with you very soon.",
    note: "The App Store and Google Play releases are being prepared as well.",
    rights: "© 2026 KasaFON",
    lang: "Language"
  }
};

const fields = {
  kicker: "kicker",
  title: "heading",
  lead: "lead",
  note: "note",
  rights: "rights"
};

let lang = localStorage.getItem("kasafon-site-lang") === "en" ? "en" : "tr";

function applyLang() {
  const dict = copy[lang];
  document.documentElement.lang = lang;
  document.title = dict.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", dict.description);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = fields[node.getAttribute("data-i18n")];
    if (key && dict[key]) node.textContent = dict[key];
  });
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", button.getAttribute("data-set-lang") === lang ? "true" : "false");
  });
  const group = document.querySelector(".lang");
  if (group) group.setAttribute("aria-label", dict.lang);
}

document.querySelectorAll("[data-set-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    lang = button.getAttribute("data-set-lang");
    localStorage.setItem("kasafon-site-lang", lang);
    applyLang();
  });
});

applyLang();
