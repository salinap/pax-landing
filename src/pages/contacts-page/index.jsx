import React, { useState } from 'react';

import TryBanner from '../../components/try-banner';
import { useIsDesktop } from '../../hooks';

export const ContactsPage = () => {
  const [type, setType] = useState('all');
  const isDesktop = useIsDesktop();
  return (
    <>
      <div className="bg-main">
        <div className="container">
          <div className="flex flex-col pb-[84px] pt-[38px] lg:flex-row lg:items-center lg:bg-[length:auto] lg:pb-[128px] lg:pt-[96px]">
            <div>
              <h1>Контакты </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main">
        <div className="rounded-t-[48px] bg-white">
          <div className="section">
            <div className="container">
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col lg:flex-row">
                  <div className="bg-primary rounded-brand-32 p-[32px] lg:w-1/4 lg:p-[40px]">
                    <div className="w-full font-tiktok text-[20px] font-semibold leading-[28px] lg:text-[24px] lg:text-[32px] lg:leading-[32px] lg:leading-[40px]">
                      Связаться
                    </div>
                  </div>
                  <div className="bg-primary rounded-brand-32 p-[32px] lg:w-1/4 lg:p-[40px]">
                    <div className="mb-[24px] flex size-[48px] items-center justify-center rounded-full bg-[#E3EEF8] lg:mb-[68px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 5.25L12 13.5L3 5.25"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.3639 12L3.23145 18.5381"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.7682 18.5381L13.6357 12"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="mb-[8px] text-[16px] leading-[24px] text-[#696777]">
                      Служба заботы
                    </div>
                    <div className="w-full font-tiktok text-[20px] font-semibold leading-[28px] lg:text-[24px] lg:leading-[32px]">
                      info@mypax.ru
                    </div>
                  </div>
                  <div className="bg-secondary rounded-brand-32 p-[32px] lg:w-1/4 lg:p-[40px]">
                    <div className="mb-[24px] flex size-[48px] items-center justify-center rounded-full bg-[#D8CEF0] lg:mb-[68px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.6616 14.3756C14.7654 14.3065 14.8849 14.2644 15.0091 14.2531C15.1334 14.2418 15.2585 14.2617 15.3731 14.3109L19.7944 16.2919C19.9434 16.3555 20.0677 16.4658 20.1489 16.606C20.23 16.7463 20.2635 16.9091 20.2444 17.07C20.0987 18.1585 19.5627 19.157 18.736 19.8799C17.9093 20.6028 16.8482 21.0008 15.75 21C12.3685 21 9.12548 19.6567 6.73439 17.2656C4.3433 14.8745 3 11.6315 3 8.24998C2.99916 7.1518 3.3972 6.09068 4.12009 5.26398C4.84298 4.43728 5.84152 3.90126 6.93 3.7556C7.09091 3.73649 7.25368 3.77 7.39395 3.85112C7.53422 3.93224 7.64444 4.05661 7.70813 4.2056L9.68906 8.6306C9.73774 8.74426 9.75756 8.86818 9.74676 8.99134C9.73596 9.11451 9.69489 9.23309 9.62719 9.33654L7.62375 11.7187C7.55269 11.826 7.51066 11.9498 7.50179 12.0781C7.49291 12.2065 7.51749 12.3349 7.57313 12.4509C8.34844 14.0381 9.98906 15.659 11.5809 16.4269C11.6975 16.4822 11.8266 16.5063 11.9553 16.4966C12.084 16.4869 12.208 16.4438 12.315 16.3715L14.6616 14.3756Z"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="mb-[8px] text-[16px] leading-[24px] text-[#696777]">
                      Служба заботы
                    </div>
                    <div className="w-full font-tiktok text-[20px] font-semibold leading-[28px] lg:text-[24px] lg:leading-[32px]">
                      8 800 999 99 99
                    </div>
                  </div>
                  <div className="bg-primary rounded-brand-32 p-[32px] lg:w-1/4 lg:p-[40px]">
                    <div className="mb-[24px] flex size-[48px] items-center justify-center rounded-full bg-[#E3EEF8] lg:mb-[68px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 5.25L12 13.5L3 5.25"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.3639 12L3.23145 18.5381"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.7682 18.5381L13.6357 12"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="mb-[8px] text-[16px] leading-[24px] text-[#696777]">
                      Корпоративным клиентам
                    </div>
                    <div className="w-full font-tiktok text-[20px] font-semibold leading-[28px] lg:text-[24px] lg:leading-[32px]">
                      info@mypax.ru
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="bg-primary rounded-brand-32 p-[32px] lg:w-1/4 lg:p-[40px]">
                    <div className="w-full font-tiktok text-[20px] font-semibold leading-[28px] lg:text-[24px] lg:text-[32px] lg:leading-[32px] lg:leading-[40px]">
                      Адреса
                    </div>
                  </div>
                  <div className="bg-primary rounded-brand-32 p-[32px] lg:w-[37.5%] lg:p-[40px]">
                    <div className="mb-[24px] flex size-[48px] items-center justify-center rounded-full bg-[#E3EEF8] lg:mb-[68px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="mb-[8px] text-[16px] leading-[24px] text-[#696777]">
                      Юридический адрес
                    </div>
                    <div className="w-full font-tiktok text-[20px] font-semibold leading-[28px] lg:text-[24px] lg:leading-[32px]">
                      г.Москва, Ленина 123, офис 123
                    </div>
                  </div>
                  <div className="bg-primary rounded-brand-32 p-[32px] lg:w-[37.5%] lg:p-[40px]">
                    <div className="mb-[24px] flex size-[48px] items-center justify-center rounded-full bg-[#E3EEF8] lg:mb-[68px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="mb-[8px] text-[16px] leading-[24px] text-[#696777]">
                      Для корреспонденции
                    </div>
                    <div className="w-full font-tiktok text-[20px] font-semibold leading-[28px] lg:text-[24px] lg:leading-[32px]">
                      г.Москва, Ленина 123, офис 123
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="bg-primary rounded-brand-32 p-[32px] lg:w-1/4 lg:p-[40px]">
                    <div className="w-full font-tiktok text-[20px] font-semibold leading-[28px] lg:text-[24px] lg:text-[32px] lg:leading-[32px] lg:leading-[40px]">
                      Инвесторам
                    </div>
                  </div>
                  <div className="bg-primary rounded-brand-32 p-[32px] lg:w-[37.5%] lg:p-[40px]">
                    <div className="mb-[24px] flex size-[48px] items-center justify-center rounded-full bg-[#E3EEF8] lg:mb-[118px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.6616 14.3756C14.7654 14.3065 14.8849 14.2644 15.0091 14.2531C15.1334 14.2418 15.2585 14.2617 15.3731 14.3109L19.7944 16.2919C19.9434 16.3555 20.0677 16.4658 20.1489 16.606C20.23 16.7463 20.2635 16.9091 20.2444 17.07C20.0987 18.1585 19.5627 19.157 18.736 19.8799C17.9093 20.6028 16.8482 21.0008 15.75 21C12.3685 21 9.12548 19.6567 6.73439 17.2656C4.3433 14.8745 3 11.6315 3 8.24998C2.99916 7.1518 3.3972 6.09068 4.12009 5.26398C4.84298 4.43728 5.84152 3.90126 6.93 3.7556C7.09091 3.73649 7.25368 3.77 7.39395 3.85112C7.53422 3.93224 7.64444 4.05661 7.70813 4.2056L9.68906 8.6306C9.73774 8.74426 9.75756 8.86818 9.74676 8.99134C9.73596 9.11451 9.69489 9.23309 9.62719 9.33654L7.62375 11.7187C7.55269 11.826 7.51066 11.9498 7.50179 12.0781C7.49291 12.2065 7.51749 12.3349 7.57313 12.4509C8.34844 14.0381 9.98906 15.659 11.5809 16.4269C11.6975 16.4822 11.8266 16.5063 11.9553 16.4966C12.084 16.4869 12.208 16.4438 12.315 16.3715L14.6616 14.3756Z"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="mb-[8px] text-[16px] leading-[24px] text-[#696777]">
                      По всем вопросам
                    </div>
                    <div className="w-full font-tiktok text-[20px] font-semibold leading-[28px] lg:text-[24px] lg:leading-[32px]">
                      8 800 999 99 99
                    </div>
                  </div>
                  <div className="bg-main rounded-brand-32 p-[32px] lg:w-[37.5%] lg:p-[40px]">
                    <div className="mb-[24px] flex size-[48px] items-center justify-center rounded-full bg-[#E3EEF8] lg:mb-[48px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 10.5H15"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 13.5H15"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.49356 19.7916C9.38406 20.8857 11.608 21.255 13.7506 20.8305C15.8933 20.4061 17.8084 19.2169 19.1391 17.4847C20.4697 15.7525 21.125 13.5955 20.9827 11.4158C20.8404 9.23618 19.9103 7.18265 18.3657 5.63813C16.8212 4.0936 14.7677 3.16349 12.588 3.0212C10.4084 2.87892 8.25138 3.53417 6.51916 4.8648C4.78695 6.19543 3.59777 8.1106 3.17333 10.2533C2.74889 12.3959 3.11817 14.6198 4.21231 16.5103L3.0395 20.0119C2.99543 20.144 2.98903 20.2858 3.02103 20.4214C3.05302 20.557 3.12215 20.681 3.22065 20.7795C3.31915 20.878 3.44314 20.9471 3.57871 20.9791C3.71429 21.0111 3.8561 21.0047 3.98825 20.9606L7.49356 19.7916Z"
                          stroke="#343330"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="mb-[16px] text-[16px] leading-[24px] text-[#696777]">
                      Оставьте свои контактные данные и интересующие вас вопросы
                      — мы свяжемся с вами в ближайшее время
                    </div>
                    <button className="header__button">Напишите нам</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TryBanner />
    </>
  );
};
