import { Outlet, useLocation } from 'react-router-dom';

import { RoutesPath } from 'shared/routes-path';
import { Seo } from 'shared/ui';
import { Helmet } from 'react-helmet-async';

import Footer from '../../components/footer';
import Header from '../../components/header';

const DefaultSeo = () => {
  const { pathname } = useLocation();
  const titles: Record<string, string> = {
    [RoutesPath.MAIN]: 'Smart-аптека',
    [RoutesPath.PRODCUT]: 'Врачам / Компаниям',
    [RoutesPath.ABOUT]: 'О нас',
    [RoutesPath.REVIEWS]: 'Отзывы',
    [RoutesPath.VACANCIES]: 'Вакансии',
    [RoutesPath.CONTACTS]: 'Контакты',
  };

  const descriptions: Record<string, string> = {
    [RoutesPath.MAIN]: 'Pax — Smart-аптека: сервис и продукты для здоровья.',
    [RoutesPath.PRODCUT]:
      'Решения Pax для врачей и компаний: сервисы и интеграции.',
    [RoutesPath.ABOUT]: 'О компании Pax: миссия, команда и ценности.',
    [RoutesPath.REVIEWS]: 'Отзывы клиентов о сервисах и продуктах Pax.',
    [RoutesPath.VACANCIES]: 'Вакансии Pax: присоединяйтесь к нашей команде.',
    [RoutesPath.CONTACTS]: 'Контакты Pax: адрес, телефон и способы связи.',
  };

  const base =
    import.meta.env?.VITE_SITE_URL ||
    (typeof window !== 'undefined' ? window.location.origin : '');
  const canonicalUrl = base ? `${base}${pathname}` : undefined;

  return (
    <Seo
      title={titles[pathname] || 'Pax'}
      description={descriptions[pathname]}
      canonicalUrl={canonicalUrl}
    />
  );
};

const StructuredData = () => {
  const base =
    import.meta.env?.VITE_SITE_URL ||
    (typeof window !== 'undefined' ? window.location.origin : '');

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pax',
    url: base || undefined,
    logo: base ? `${base}/favicon.png` : undefined,
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pax',
    url: base || undefined,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${base}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(org)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
};

export const Layout = () => {
  return (
    <div className="relative overflow-y-auto overflow-x-hidden">
      <DefaultSeo />
      <StructuredData />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
