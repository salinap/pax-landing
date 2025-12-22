import React, { useState } from 'react';

import TeamImage1 from '../../assets/images/team/1.png';
import TeamImage2 from '../../assets/images/team/2.png';
import TeamImage3 from '../../assets/images/team/3.png';
import TeamImage4 from '../../assets/images/team/4.png';
import TeamImage5 from '../../assets/images/team/5.jpg';
import TryBanner from '../../components/try-banner';
import VacanciesAccordion from '../../components/vacancies-accordion';
import { useIsDesktop } from '../../hooks';

export const VacanciesPage = () => {
  const [type, setType] = useState('all');
  const isDesktop = useIsDesktop();
  return (
    <>
      <div className="bg-main">
        <div className="container">
          <div className="flex flex-col pb-[84px] pt-[38px] lg:flex-row lg:items-start lg:bg-[length:auto] lg:pb-[140px] lg:pt-[96px]">
            <div>
              <h1>Вакансии </h1>
            </div>
            <div className="mt-[40px] flex flex-wrap items-center gap-[32px] border-t border-[#c6d8e9] pt-[40px] lg:ml-auto lg:mt-0 lg:border-l lg:border-t-0 lg:pl-[80px] lg:pt-0">
              <div className="w-full lg:w-auto">
                <div className="font-tiktok text-[48px] font-bold leading-[56px] lg:text-[72px] lg:leading-[80px]">
                  345
                </div>
                <div className="text-[20px] leading-[32px] text-[#696777]">
                  сотрудников
                </div>
              </div>
              <div className="flex [&>*:not(:first-child)]:ml-[-20px]">
                <div
                  className="size-[66px] rounded-full border-[5px] border-solid border-[#D8EDFF] bg-cover bg-center sm:size-[88px]"
                  style={{ backgroundImage: `url(${TeamImage1})` }}
                />
                <div
                  className="size-[66px] rounded-full border-[5px] border-solid border-[#D8EDFF] bg-cover bg-center sm:size-[88px]"
                  style={{ backgroundImage: `url(${TeamImage2})` }}
                />
                <div
                  className="size-[66px] rounded-full border-[5px] border-solid border-[#D8EDFF] bg-cover bg-center sm:size-[88px]"
                  style={{ backgroundImage: `url(${TeamImage3})` }}
                />
                <div
                  className="size-[66px] rounded-full border-[5px] border-solid border-[#D8EDFF] bg-cover bg-center sm:size-[88px]"
                  style={{ backgroundImage: `url(${TeamImage4})` }}
                />
                <div
                  className="size-[66px] rounded-full border-[5px] border-solid border-[#D8EDFF] bg-[length:90px] bg-[center_top] sm:size-[88px] lg:bg-[length:130px]"
                  style={{ backgroundImage: `url(${TeamImage5})` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main">
        <div className="rounded-t-[48px] bg-white">
          <div className="section">
            <div className="container">
              <VacanciesAccordion />
            </div>
          </div>
        </div>
      </div>

      <TryBanner />
    </>
  );
};
