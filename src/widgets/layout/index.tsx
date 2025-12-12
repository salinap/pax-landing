import { Outlet } from 'react-router-dom';

import Footer from '../../components/footer';
import Header from '../../components/header';

export const Layout = () => {
  return (
    <div className="relative overflow-y-auto overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
