import { AnimatePresence, motion } from 'framer-motion';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { RoutesPath } from 'shared/routes-path';

import PaxLogo from '../../assets/images/pax.svg';

const NAV = [
  {
    title: 'Smart-аптека',
    to: RoutesPath.MAIN,
  },
  {
    title: 'Врачам / Компаниям',
    to: RoutesPath.PRODCUT,
  },
  {
    title: 'О нас',
    to: RoutesPath.ABOUT,
  },
  {
    title: 'Отзывы',
    to: RoutesPath.REVIEWS,
  },
  {
    title: 'Вакансии',
    to: RoutesPath.VACANCIES,
  },
  {
    title: 'Контакты',
    to: RoutesPath.CONTACTS,
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (open) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [open]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            className="fixed inset-x-0 top-[72px] z-50 max-h-[calc(100vh-72px)] overflow-auto bg-white"
            style={{ overflow: 'hidden' }}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.2 }}
            exit={{ height: 0 }}
          >
            <div className="container flex h-full flex-col">
              <nav className="m-auto flex flex-col items-center gap-[18px]">
                {NAV.map(({ title, to }) => (
                  <NavLink
                    to={to}
                    key={to}
                    className="text-[24px] text-[#696777]"
                  >
                    {title}
                  </NavLink>
                ))}
              </nav>
              <button className="header__button mb-[48px] mt-[46px]">
                Войти / Регистрация
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-main">
        <div className="container">
          <div
            className={`mx-[-24px] flex items-center px-[24px] py-[21px] lg:py-[32px]  ${open ? 'bg-white' : 'transparent transition'}`}
          >
            <NavLink to={NAV[0].to}>
              <img src={PaxLogo} className="max-h-[34px] lg:max-h-max" alt="" />
            </NavLink>
            <nav className="mx-auto hidden xl:gap-[14px] lg:flex">
              {NAV.map(({ title, to }) => (
                <NavLink
                  to={to}
                  key={to}
                  className={({ isActive }) =>
                    isActive
                      ? 'header__link header__link--active'
                      : 'header__link'
                  }
                >
                  {title}
                </NavLink>
              ))}
            </nav>
            <button className="header__button hidden lg:block">
              Войти
              <span className="text-white lg:hidden xl:inline">
                {' '}
                / Регистрация
              </span>
            </button>
            <div
              className="relative top-[-5px] ml-auto flex size-[40px] cursor-pointer items-center justify-center lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7157 29.2822L29.2773 10.7207"
                    stroke="#151519"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                  <path
                    d="M29.2772 29.2822L10.7157 10.7207"
                    stroke="#151519"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                </svg>
              ) : (
                <svg
                  width="29"
                  height="19"
                  viewBox="0 0 29 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 1.25H27.5M1.25 9.375H27.5M1.25 17.5H27.5"
                    stroke="#151519"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
