import './styles/main.scss';

import { MainPage } from 'pages';
import { Layout } from 'widgets';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AboutPage } from 'pages/about-page';
import { ContactsPage } from 'pages/contacts-page';
import { ReviewPage } from 'pages/review-page';
import { VacanciesPage } from 'pages/vacancies-page';

import { RoutesPath } from 'shared/routes-path';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <ToastContainer closeOnClick theme="colored" />
    </QueryClientProvider>
  );
};

const Pages = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={RoutesPath.MAIN} element={<MainPage />} />
        <Route path={RoutesPath.ABOUT} element={<AboutPage />} />
        <Route path={RoutesPath.REVIEWS} element={<ReviewPage />} />
        <Route path={RoutesPath.VACANCIES} element={<VacanciesPage />} />
        <Route path={RoutesPath.CONTACTS} element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to={RoutesPath.MAIN} />} />
    </Routes>
  );
};
