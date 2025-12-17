import React from 'react';

import TryMobileImage from '../../assets/images/try-mobile.svg';
import TryImage from '../../assets/images/try.svg';

const TryBanner = () => {
  return (
    <div className="container">
      <div className="mx-[-24px] flex flex-wrap items-end pb-[96px] lg:mx-0">
        <div className="flex-1 rounded-[48px] bg-[#0788F1] p-[32px] lg:h-[356px] lg:p-[60px]">
          <div className="mb-[12px] text-[28px] font-semibold leading-[36px] text-white lg:text-[40px] lg:leading-[48px]">
            Попробуйте, вам понравится!
          </div>
          <div className="mb-[32px] pr-0 font-tiktok text-[20px] font-medium leading-[28px] text-white opacity-80 lg:pr-[30px]">
            Мы поможем собрать вам персональный заказ. ИИ, менеджеры и огромная
            база препаратов - все что нужно для эффективного лечения.
          </div>
          <button className="button w-full xl:w-auto">Сделать заказ</button>
        </div>
        <div className="relative hidden xl:block">
          <img src={TryImage} alt="" className="relative z-[2]" />
          <div className="absolute inset-x-0 bottom-0 h-[356px] rounded-[48px] bg-[#0788F1]"></div>
        </div>
        <div className="relative block w-full xl:hidden">
          <img
            src={TryMobileImage}
            alt=""
            className="absolute left-1/2 top-0 z-[2] -translate-x-1/2"
          />
          <div className="h-[356px] rounded-[48px] bg-[#0788F1]"></div>
        </div>
      </div>
    </div>
  );
};

export default TryBanner;
