import React, { useState } from 'react';

import TeamImage from '../../assets/images/team.png';
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
          <div className="flex flex-col pb-[84px] pt-[38px] lg:flex-row lg:items-center lg:bg-[length:auto] lg:pb-[140px] lg:pt-[96px]">
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
                {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
                  <div
                    key={i}
                    className="size-[66px] rounded-full border-[5px] border-solid border-[#D8EDFF] bg-cover bg-center sm:size-[88px]"
                    style={{ backgroundImage: `url(${TeamImage})` }}
                  />
                ))}
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
