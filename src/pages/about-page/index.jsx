import 'swiper/css';

import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import AboutImage from '../../assets/images/about-image.svg';
import AboutVideoPreview from '../../assets/images/about-video-prview.jpg';
import TeamImage from '../../assets/images/team.png';
import WhenImage from '../../assets/images/when-image.jpg';
import WhyImage from '../../assets/images/why-about.jpg';
import VideoCard from '../../components/video-card';

const WHEN = [
  {
    tag: 'до',
    title: '80%',
    info: 'пациентов с низкой приверженностью лечению',
  },
  {
    tag: 'до',
    title: '30%',
    info: 'госпитализаций связаны с ошибками в приеме лекарств - WHO, 2023',
  },
  {
    tag: 'до',
    title: '25 000',
    info: 'тысяч человек в год умирает от неправильного приёма лекарств по данным Минздрава РФ',
  },
  {
    title: '7%',
    info: 'пациентов принимают неправильные лекарства',
  },
  {
    title: '45%',
    info: 'пациентов в России прекращают лечение раньше времени - по данным IQVIA и DSM Group',
  },
];

export const AboutPage = () => {
  return (
    <>
      <div className="bg-main">
        <div
          className="bg-right-center mx-auto max-w-[1400px] bg-[length:560px] bg-[center_bottom_-125px] bg-no-repeat pb-[400px] pt-[38px] lg:bg-[length:auto] lg:bg-[right_-50px_center] lg:pb-[128px] lg:pt-[96px]"
          style={{
            backgroundImage: `url(${AboutImage})`,
          }}
        >
          <div className="container">
            <div className="w-full lg:w-1/2">
              <h1>Мы меняем способ приёма лекарств</h1>
              <h2 className="mt-[20px]">
                Pax помогает людям принимать лекарства вовремя и без ошибок. Мы
                упаковываем препараты по дням и дозам, чтобы приём стал
                понятным, безопасным и привычным, как чистка зубов. Всё — под
                контролем и доступно онлайн.
              </h2>
              <div className="mt-[38px] flex flex-col gap-[24px] lg:mt-[48px] xl:flex-row">
                <button className="button-primary">Связаться с нами</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h3>Технология здоровья</h3>
          <h4 className="mb-[40px] lg:mb-[56px]">в действии</h4>
          <VideoCard
            preview={AboutVideoPreview}
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
        </div>
      </div>
      <div className="section team-section">
        <div className="container">
          <h3>
            Люди, которые заботятся <br />о вашем здоровье
          </h3>
          <h4 className="mb-[40px] lg:mb-[56px]">Команда</h4>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerGroup={1}
          centeredSlides
          loop={true}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1024: {
              spaceBetween: 32,
              centeredSlides: false,
            },
          }}
        >
          {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
            <SwiperSlide
              className="min-w-[280px] max-w-[calc(100%-48px)] text-center sm:min-w-[320px] sm:max-w-[25%] xl:max-w-[20%]"
              key={i}
            >
              <div
                className="h-[320px] rounded-brand-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${TeamImage})` }}
              />
              <p className="mb-[4px] mt-[20px] text-[24px] font-semibold leading-[32px]">
                Прохор Валетов
              </p>
              <p className="text-[15px] leading-[24px] text-[#696777]">
                Главный таблетковед
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="section">
        <div className="container">
          <h3>
            Когда лекарства <br />
            пьют неправильно
          </h3>
          <div className="mx-[-24px] mt-[40px] flex flex-wrap md:mx-0 lg:mt-[56px]">
            {WHEN.map((item, index) => (
              <>
                <div
                  className={`${index === 2 ? 'bg-[#FCE5E6]' : 'bg-primary'} w-full rounded-brand-32 p-[32px] md:min-h-[296px] md:w-1/2 md:rounded-[48px] md:p-[48px] lg:w-1/3`}
                  key={index}
                >
                  {item.tag && (
                    <div className="mb-[24px] text-[16px] leading-[24px] text-[#696777]">
                      {item.tag}
                    </div>
                  )}
                  <div className="mb-[24px] font-tiktok text-[48px] font-semibold leading-[56px]">
                    {item.title}
                  </div>
                  <div className="text-[16px] leading-[24px] text-[#696777]">
                    {item.info}
                  </div>
                </div>
                {index === 2 && (
                  <div
                    className="hidden min-h-[296px] w-full rounded-[48px] bg-cover md:block md:w-1/2 lg:w-1/3"
                    style={{ backgroundImage: `url(${WhenImage})` }}
                    key={index}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h3>Почему Pax?</h3>
          <div className="mx-[-24px] mt-[40px] flex md:mx-0 lg:mt-[56px]">
            <div className="w-full lg:w-1/2">
              <div className="bg-primary rounded-brand-32 p-[32px] lg:rounded-[48px] lg:p-[56px]">
                <div className="mb-[16px] font-tiktok text-[28px] font-semibold leading-[36px] lg:mb-[24px] lg:text-[40px] lg:leading-[48px]">
                  Производство, которому можно доверять
                </div>
                <div className="text-[20px] leading-[32px] text-[#696777]">
                  Мы собираем ваши лекарства на собственной линии с медицинским
                  контролем. Каждая дозировка проходит два этапа проверки —
                  автоматикой и фармацевтом.{' '}
                </div>
              </div>
              <img
                src={WhyImage}
                alt=""
                className="block rounded-brand-32 lg:hidden"
              />
              <div className="bg-secondary rounded-brand-32 p-[32px] lg:rounded-[48px] lg:p-[56px]">
                <div className="text-[20px] leading-[32px] text-[#696777] opacity-50">
                  Регистрационный номер лицензии
                </div>
                <div className="mb-[16px] text-[20px] leading-[32px] text-[#696777]">
                  Л042-01137-77/00263495
                </div>
                <div className="text-[20px] leading-[32px] text-[#696777] opacity-50">
                  Дата предоставления лицензии
                </div>
                <div className="mb-[16px] text-[20px] leading-[32px] text-[#696777]">
                  26.01.2021
                </div>
                <div className="text-[20px] leading-[32px] text-[#696777] opacity-50">
                  Лицензирующий орган
                </div>
                <div className="text-[20px] leading-[32px] text-[#696777]">
                  Федеральная служба по надзору в сфере здравоохранения
                </div>
              </div>
            </div>
            <div
              className="hidden w-1/2 rounded-[48px] bg-cover lg:block"
              style={{ backgroundImage: `url(${WhyImage})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
