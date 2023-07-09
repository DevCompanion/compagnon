import i18n, {Resource, ResourceKey} from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

let resources: Resource = {};

const globalTranslationFiles = import.meta.glob(
  '../../lang/*/*.json',
  { as: 'raw', eager: true },
);

for (const path in globalTranslationFiles) {
  const lang = path.split('/')[3];
  const scope = path.split('/')[4].split('.')[0];
  let scopedTranslations = JSON.parse(globalTranslationFiles[path]);
  // prefix scope to translation keys if not already present
  if (![lang, 'common', 'translation'].includes(scope)) {
    scopedTranslations = Object.keys(scopedTranslations).reduce((acc, key) => {
      const scopedKey = `${scope}.${key}`;

      // @ts-ignore
      acc[scopedKey] = scopedTranslations[key];

      return acc;
    }, {});
  }

  const globalTranslations = Object.assign(
    resources[lang]?.['translation'] || {},
    scopedTranslations,
  );

  resources[lang] = Object.assign(
    resources[lang] || {},
    { translation: globalTranslations },
  );
}

const moduleTranslationFiles = import.meta.glob(
  ['../../../modules/**/Resources/lang/*/*.json', '../../../external-modules/**/Resources/lang/*/*.json'],
  { as: 'raw', eager: true },
);

for (const path in moduleTranslationFiles) {
  const lang = path.split('/')[7];
  const moduleNamespace = path.split('/')[4];
  const scope = path.split('/')[8].split('.')[0];
  let scopedTranslations = JSON.parse(moduleTranslationFiles[path]);
  // prefix scope to translation keys if not already present
  if (![lang, 'common', 'translation'].includes(scope)) {
    scopedTranslations = Object.keys(scopedTranslations).reduce((acc, key) => {
      const scopedKey = `${scope}.${key}`;

      // @ts-ignore
      acc[scopedKey] = scopedTranslations[key];

      return acc;
    }, {});
  }

  const moduleTranslations = Object.assign(
    resources[lang]?.[moduleNamespace] || {},
    scopedTranslations,
  );

  resources[lang] = Object.assign(
    resources[lang] || {},
    { [moduleNamespace]: moduleTranslations },
  );
}

i18n
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: resources,
  });


export default i18n;
