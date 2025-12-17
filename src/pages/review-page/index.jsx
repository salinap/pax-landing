import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import Star from '../../assets/images/Star.svg';
import ActiveStar from '../../assets/images/active-start.svg';
import TeamImage from '../../assets/images/team.png';
import TryBanner from '../../components/try-banner';
import { useIsDesktop } from '../../hooks';

const FILTER = [
  {
    title: 'Все продукты',
    type: 'all',
  },
  {
    title: 'Продукт 1',
    type: '1',
  },
  {
    title: 'Продукт 2',
    type: '2',
  },
  {
    title: 'Продукт 3',
    type: '3',
  },
  {
    title: 'Продукт 4',
    type: '4',
  },
  {
    title: 'Продукт 5',
    type: '5',
  },
  {
    title: 'Продукт 6',
    type: '6',
  },
  {
    title: 'Продукт 7',
    type: '7',
  },
];

export const ReviewPage = () => {
  const [type, setType] = useState('all');
  const isDesktop = useIsDesktop();
  return (
    <>
      <div className="bg-main">
        <div className="container">
          <div className="flex flex-col pb-[84px] pt-[38px] lg:flex-row lg:items-center lg:bg-[length:auto] lg:pb-[128px] lg:pt-[96px]">
            <div>
              <h1>Отзывы </h1>
              <div className="mt-[38px] hidden flex-col gap-[24px] lg:mt-[48px] lg:flex xl:flex-row">
                <button className="button-primary">Оставить отзыв</button>
              </div>
            </div>
            <div className="mt-[40px] flex flex-wrap gap-[16px] border-t border-[#c6d8e9] pt-[40px] lg:ml-auto lg:mt-0 lg:h-[168px] lg:border-l lg:border-t-0 lg:pl-[80px] lg:pt-0">
              <div className="w-full lg:w-auto">
                <div className="mb-[8px] font-tiktok text-[48px] font-bold leading-[56px] lg:text-[72px] lg:leading-[80px]">
                  4.8
                </div>
                <div className="text-[20px] leading-[32px] text-[#696777] opacity-50">
                  1 345 отзывов
                  <br />2 345 оценок
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((i, _, arr) => (
                  <div className="flex" key={i}>
                    {Array.from(
                      { length: arr.length + 1 - i },
                      (_, i) => i + 1,
                    ).map((k) => (
                      <img key={k} src={Star} alt="" />
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex w-[calc(100%-136px)] flex-col gap-[12px] lg:w-[215px]">
                <div className="relative flex h-[24px] w-full items-center">
                  <div className="absolute inset-x-0 top-1/2 h-[6px] translate-y-[-2px] rounded-full bg-[#CBE5FD]"></div>
                  <div className="absolute inset-x-0 top-1/2 h-[6px] translate-y-[-2px] rounded-full bg-[#0788F1]"></div>
                </div>
                <div className="relative flex h-[24px] w-full items-center">
                  <div className="absolute inset-x-0 top-1/2 h-[6px] translate-y-[-2px] rounded-full bg-[#CBE5FD]"></div>
                  <div className="absolute left-0 right-[60%] top-1/2 h-[6px] translate-y-[-2px] rounded-full bg-[#0788F1]"></div>
                </div>
                <div className="relative flex h-[24px] w-full items-center">
                  <div className="absolute inset-x-0 top-1/2 h-[6px] translate-y-[-2px] rounded-full bg-[#CBE5FD]"></div>
                  <div className="absolute left-0 right-[85%] top-1/2 h-[6px] translate-y-[-2px] rounded-full bg-[#0788F1]"></div>
                </div>
                <div className="relative flex h-[24px] w-full items-center">
                  <div className="absolute inset-x-0 top-1/2 h-[6px] translate-y-[-2px] rounded-full bg-[#CBE5FD]"></div>
                  <div className="absolute left-0 right-[90%] top-1/2 h-[6px] translate-y-[-2px] rounded-full bg-[#0788F1]"></div>
                </div>
                <div className="relative flex h-[24px] w-full items-center">
                  <div className="absolute inset-x-0 top-1/2 h-[6px] translate-y-[-2px] rounded-full bg-[#CBE5FD]"></div>
                  <div className="absolute left-0 right-full top-1/2 h-[6px] translate-y-[-2px] rounded-full bg-[#0788F1]"></div>
                </div>
              </div>
            </div>
            <div className="mt-[40px] flex-col gap-[24px] lg:hidden">
              <button className="button-primary w-full">Оставить отзыв</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main">
        <div className="rounded-t-[48px] bg-white">
          <div className="section">
            <div className="container">
              <div className="mx-[-24px] overflow-auto lg:mx-0">
                <div className="flex flex-nowrap gap-[12px] pb-[20px] pl-[24px] lg:flex-wrap lg:pb-0 lg:pl-0">
                  {FILTER.map((item) => (
                    <div
                      className={`${item.type === type ? 'pointer-events-none bg-[#151519] text-white' : 'cursor-pointer bg-[#F3F8FD] text-[#696777]'} text-nowrap rounded-full px-[20px] py-[10px] text-[16px]`}
                      key={item.type}
                      onClick={() => setType(item.type)}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mx-[-24px] my-[40px] flex flex-col gap-[24px] lg:mx-0">
                {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
                  <div className="flex flex-col lg:flex-row" key={i}>
                    <div className="bg-primary flex min-w-[352px] flex-row items-center rounded-brand-32 p-[32px] lg:flex-col lg:items-start">
                      <div
                        className="mb-0 mr-[24px] size-[64px] rounded-brand-16 bg-cover bg-center lg:mb-[24px] lg:size-[112px] lg:rounded-[24px]"
                        style={{ backgroundImage: `url(${TeamImage})` }}
                      />
                      <div>
                        <div className="mb-[4px] font-tiktok text-[20px] font-semibold leading-[28px] lg:text-[24px] lg:leading-[32px]">
                          Прохор Сидоров
                        </div>
                        <div className="text-[16px] leading-[24px] text-[#696777]">
                          26 сентября 2025
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary rounded-brand-32 p-[32px]">
                      <div className="mb-[15px] flex items-center gap-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
                        <span>4.0</span>
                        <div className="flex items-center gap-[4px]">
                          <img src={ActiveStar} alt="" />
                          <img src={ActiveStar} alt="" />
                          <img src={ActiveStar} alt="" />
                          <img src={ActiveStar} alt="" />
                          <img src={Star} alt="" />
                        </div>
                      </div>
                      <div className="text-[16px] leading-[24px] text-[#696777]">
                        Я начал принимать это лекарство по рекомендации врача, и
                        могу сказать, что оно оказалось настоящей находкой.
                        Сначала я немного опасался возможных побочных эффектов,
                        которые обычно сопровождают многие препараты, но, к
                        счастью, в этом случае их практически не было. Уже после
                        первого применения я заметил значительное облегчение
                        симптомов, и с каждым днем становилось все лучше. Уже
                        после первого применения я заметил значительное
                        облегчение симптомов, и с каждым днем становилось все
                        лучше.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <ReactPaginate
                  className="pagination"
                  breakLabel="..."
                  previousLabel={
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.25 1.06067L0.75 8.56067L8.25 16.0607"
                        stroke="#696777"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  onPageChange={console.log}
                  pageCount={20}
                  pageRangeDisplayed={isDesktop ? 2 : 2}
                  marginPagesDisplayed={isDesktop ? 3 : 0}
                  nextLabel={
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-180"
                    >
                      <path
                        d="M8.25 1.06067L0.75 8.56067L8.25 16.0607"
                        stroke="#696777"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TryBanner />
    </>
  );
};
