import { ui, defaultLang } from "./ui";

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Para construir links a otra ruta respetando el idioma actual
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(
    path: string,
    targetLang: keyof typeof ui = lang,
  ) {
    return targetLang === defaultLang ? path : `/${targetLang}${path}`;
  };
}
