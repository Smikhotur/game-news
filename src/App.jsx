import React, { Suspense } from 'react';
// import { useTranslation } from 'react-i18next';
// import { LOCALE } from './CONST/keys-localeStorage';
// import { DEFAULT_LOCALE } from './CONST/locales';
import RouterLayout from './routes/RouterLayout';

function App() {
  // const { t } = useTranslation(['common']);
  // const { i18n } = useTranslation('common');

  // const lang = localStorage.getItem(LOCALE) || DEFAULT_LOCALE;

  // const toSwitchLang = () => {
  //   i18n.changeLanguage(lang === 'en' ? 'ru' : 'en');
  //   console.log(lang);
  // };

  return (
    <Suspense fallback={<span>loading...</span>}>
      <RouterLayout />
    </Suspense>
  );
}

export default App;
