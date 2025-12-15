import 'swiper/css';

import { AnimatePresence, motion } from 'framer-motion';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import HiWImage1 from '../../assets/images/hiw1.jpg';
import HiWImage2 from '../../assets/images/hiw2.jpg';
import HiWImage3 from '../../assets/images/hiw3.jpg';
import MainImage from '../../assets/images/main-image.svg';
import ResultImage1 from '../../assets/images/result1.jpg';
import ResultImage2 from '../../assets/images/result2.jpg';
import SubtractLogo from '../../assets/images/subtract.svg';
import TryMobileImage from '../../assets/images/try-mobile.svg';
import TryImage from '../../assets/images/try.svg';
import VideoPreview from '../../assets/images/video-preview.jpg';
import WhyImage1 from '../../assets/images/why1.svg';
import WhyImage2 from '../../assets/images/why2.svg';
import WhyImage3 from '../../assets/images/why3.svg';
import WhyImage4 from '../../assets/images/why4.svg';
import FaqAccordion from '../../components/faq-accordion';
import VideoCard from '../../components/video-card';

const HOW_IT_WORKS = [
  {
    title: 'Шаг 1',
    description:
      'Загрузите бумажный или электронный рецепт, или выберете лекарства из списка. При подборе препарата вам поможет встроенный ИИ.',
    img: HiWImage1,
  },
  {
    title: 'Шаг 2',
    description:
      'Получите персональный набор в вашей клинике или аптеке рядом с вашим домом. Вы можете оформить заказ для другого человека.',
    img: HiWImage2,
  },
  {
    title: 'Шаг 3',
    description:
      'Принимайте без сбоев — по дням, с напоминаниями и удобным графиком в личном кабинете',
    img: HiWImage3,
  },
];

const REVIREWS = [
  {
    title: 'Александра',
    date: '26 сентября 2025',
    text: 'Я использовал это лекарство в течение двух недель, и результаты превзошли все ожидания. Оно быстро помогло облегчить симптомы, а побочные эффекты были минимальными. Рекомендую всем, кто ищет эффективное и безопасное решение!',
    img: HiWImage1,
  },
  {
    title: 'Прохор',
    date: '26 сентября 2025',
    text: ' Я начал принимать это лекарство по рекомендации врача, и могу сказать, что оно оказалось настоящей находкой. Сначала я немного опасался возможных побочных эффектов, которые обычно сопровождают многие препараты, но, к счастью, в этом случае их практически не было. Уже после первого применения я заметил значительное облегчение симптомов, и с каждым днем становилось все лучше.',
    img: HiWImage2,
  },
  {
    title: 'Евгения',
    date: '26 сентября 2025',
    text: 'Я использовал это лекарство в течение двух недель, и результаты превзошли все ожидания. Оно быстро помогло облегчить симптомы, а побочные эффекты были минимальными. Рекомендую всем, кто ищет эффективное и безопасное решение!',
    img: HiWImage3,
  },
  {
    title: 'Светлана',
    date: '26 сентября 2025',
    text: 'Мое состояние улучшилось, вернулась энергия, и я смог заниматься привычными делами без дискомфорта. Кроме того, очень понравилась доступная инструкция, которая помогла мне разобраться, как правильно использовать препарат. В целом, я очень доволен результатом и с уверенностью могу рекомендовать это лекарство всем, кто сталкивается с похожими проблемами!',
    img: HiWImage1,
  },
];

export const MainPage = () => {
  const [howItWorksStep, setHowItWorksStep] = useState(0);

  return (
    <>
      <div className="bg-main">
        <div className="container">
          <div
            className="bg-right-center bg-[length:336px] bg-[center_bottom_-65px] bg-no-repeat pb-[400px] pt-[38px] lg:bg-[length:auto] lg:bg-[right_50px_center] lg:pb-[128px] lg:pt-[96px]"
            style={{
              backgroundImage: `url(${MainImage})`,
            }}
          >
            <div className="w-full lg:w-1/2">
              <h1>
                Соберите&nbsp;
                <br />
                свой набор препаратов
              </h1>
              <h2 className="mt-[20px]">
                Индивидуально подобранные лекарства <br />и витамины — в удобной
                упаковке
              </h2>
              <div className="mt-[38px] flex flex-col gap-[24px] lg:mt-[48px] xl:flex-row">
                <button className="button-primary">Начать сбор набора</button>
                <div className="hidden w-fit items-center gap-3 rounded-[24px] bg-white p-[10px] pr-[24px] lg:flex">
                  <div className="flex">
                    <img src={SubtractLogo} alt="Logo" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[20px] font-semibold text-black">
                      15 000 бонусов
                    </span>
                    <span className="text-sm text-gray-500">
                      за регистрацию на PAX
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        <div className="bg-main">
          <div className="rounded-tl-[48px] bg-white">
            <div className="section">
              <div className="container">
                <h3>Как это работает</h3>
                <h4>(мини-гайд)</h4>
                <div className="mt-[56px]">
                  <div className="hidden rounded-[48px] bg-[#F3F8FD] lg:flex">
                    <div className="flex-1 py-[16px]">
                      {HOW_IT_WORKS.map((step, index) => (
                        <div
                          className="relative cursor-pointer py-[48px] pl-[64px]"
                          key={index}
                          onClick={() => setHowItWorksStep(index)}
                        >
                          {index === howItWorksStep && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              key={howItWorksStep}
                            >
                              <div className="absolute inset-y-[32px] left-0 w-[4px] rounded-r-[4px] bg-[#0788F1]"></div>
                            </motion.div>
                          )}
                          <div className="mb-[12px] text-[32px] font-semibold leading-[40px]">
                            {step.title}
                          </div>
                          <p className="text-[20px] leading-[32px] text-[#696777]">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="h-full p-[16px]">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="h-full rounded-brand-32 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${HOW_IT_WORKS[howItWorksStep].img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right center',
                          }}
                          key={howItWorksStep}
                        ></motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="mx-[-24px] block px-[24px] lg:hidden">
                    <Swiper
                      modules={[Pagination]}
                      autoHeight={true}
                      spaceBetween={16}
                      slidesPerView="auto"
                      pagination={{ clickable: true }}
                    >
                      {HOW_IT_WORKS.map((step, index) => (
                        <SwiperSlide
                          key={index}
                          className="max-w-[400px] rounded-brand-32 bg-[#F3F8FD] p-[32px]"
                        >
                          <div className="mb-[12px] text-[24px] font-semibold leading-[32px]">
                            {step.title}
                          </div>
                          <p className="mb-[32px] text-[20px] leading-[32px] text-[#696777]">
                            {step.description}
                          </p>
                          <div
                            className="h-[346px] rounded-brand-32"
                            style={{
                              backgroundImage: `url(${step.img})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right center',
                            }}
                          ></div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
      <div className="container">
        <div className="pt-[46px] xl:pt-[96px]"></div>
        <h3>Почему PAX?</h3>
        <div className="mx-[-26px] mt-[56px] flex flex-wrap lg:mx-0">
          <div className="bg-primary rounded-[48px] px-[24px] py-[16px] sm:w-1/2 lg:px-[32px]">
            <div className="flex items-center justify-center py-[24px] sm:h-[310px] sm:py-0">
              <img src={WhyImage1} alt="" />
            </div>
            <div className="mb-[16px] text-center text-[24px] font-medium leading-[32px] lg:text-[32px] lg:leading-[40px]">
              Персональный подбор и&nbsp;дозировка
            </div>
            <div className="px-[16px] pb-[32px] text-center text-[20px] leading-[32px] text-[#696777]">
              <b className="font-medium text-[#696777]">80%</b> клиентов
              признаются, что индивидуальные наборы помогли им навести порядок в
              приёме препаратов — больше никакой путаницы или забытых таблеток
            </div>
          </div>
          <div className="bg-main rounded-[48px] px-[24px] py-[16px] sm:w-1/2 lg:px-[32px]">
            <div className="flex items-center justify-center py-[24px] sm:h-[310px] sm:py-0">
              <img src={WhyImage2} alt="" />
            </div>
            <div className="mb-[16px] text-center text-[24px] font-medium leading-[32px] lg:text-[32px] lg:leading-[40px]">
              Удобная упаковка <br />
              по дням
            </div>
            <div className="px-[16px] pb-[32px] text-center text-[20px] leading-[32px] text-[#696777]">
              9 из 10 наших клиентов отмечают, что благодаря индивидуальной
              упаковке им стало значительно проще соблюдать режим приёма
              препаратов
            </div>
          </div>
          <div className="bg-secondary rounded-[48px] px-[24px] py-[16px] sm:w-1/2 lg:px-[32px]">
            <div className="flex items-center justify-center py-[24px] sm:h-[310px] sm:py-0">
              <img src={WhyImage3} alt="" />
            </div>
            <div className="mb-[16px] text-center text-[24px] font-medium leading-[32px] lg:text-[32px] lg:leading-[40px]">
              Контроль состава <br />и качества препаратов
            </div>
            <div className="px-[16px] pb-[32px] text-center text-[20px] leading-[32px] text-[#696777]">
              Наша команда экспертов использует передовые методы и технологии,
              чтобы гарантировать, что каждый продукт не только эффективен, но и
              абсолютно безопасен для потребителей
            </div>
          </div>
          <div className="bg-primary rounded-[48px] px-[24px] py-[16px] sm:w-1/2 lg:px-[32px]">
            <div className="flex items-center justify-center py-[24px] sm:h-[310px] sm:py-0">
              <img src={WhyImage4} alt="" />
            </div>
            <div className="mb-[16px] text-center text-[24px] font-medium leading-[32px] lg:text-[32px] lg:leading-[40px]">
              Поддержка в соблюдении <br />
              режима
            </div>
            <div className="px-[16px] pb-[32px] text-center text-[20px] leading-[32px] text-[#696777]">
              Наши наборы, напоминания и чёткий график позволяют повысить
              дисциплину приёма на{' '}
              <b className="font-medium text-[#696777]">45–60%</b> (по сравнению
              с самостоятельным приёмом без систематизации)
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <VideoCard
            preview={VideoPreview}
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
        </div>
      </div>
      <div className="my-[32px]">
        <div className="container">
          <div className="bg-main mx-[-24px] flex flex-col rounded-[48px] px-[24px] py-[48px] lg:mx-0 lg:flex-row lg:items-center lg:px-[48px]">
            <div className="flex">
              <img src={SubtractLogo} className="size-[80px]" alt="" />
              <div className="ml-[32px]">
                <div className="mb-[4px] text-[24px] font-bold lg:text-[32px]">
                  Получите 15&nbsp;000 баллов{' '}
                </div>
                <div className="text-[20px] text-[#696777]">
                  За регистрацию на Pax
                </div>
              </div>
            </div>
            <button className="button mt-[32px] lg:ml-auto lg:mt-0">
              Сделать первый заказ
            </button>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h3>
            Результаты, которыми <br />
            хочется делиться
          </h3>
          <h4>Отзывы</h4>
          <div className="results-slider mt-[48px] lg:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView="auto"
              pagination={{ clickable: true }}
            >
              {REVIREWS.map((review, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-primary w-full rounded-brand-32 p-[32px]"
                >
                  <div className="flex">
                    <div
                      className="size-[64px] rounded-full"
                      style={{
                        backgroundImage: `url(${review.img})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                    />
                    <div className="mb-[24px] ml-[24px]">
                      <div className="mb-[4px] text-[24px] font-semibold leading-[32px]">
                        {review.title}
                      </div>
                      <div className="text-[16px] text-[#696777]">
                        {review.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-[16px] leading-[24px] text-[#696777]">
                    {review.text}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-[56px] hidden flex-wrap lg:flex">
            {REVIREWS.map((review, index) => {
              return (
                <>
                  {index === 2 && (
                    <>
                      <div
                        className="bg-primary w-1/3 rounded-[48px] p-[48px]"
                        style={{
                          backgroundImage: `url(${ResultImage1})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                      ></div>
                      <div
                        className="bg-primary w-1/3 rounded-[48px] p-[48px]"
                        style={{
                          backgroundImage: `url(${ResultImage2})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                      ></div>
                    </>
                  )}
                  <div className="bg-primary w-1/3 rounded-[48px] p-[48px]">
                    <div className="flex">
                      <div
                        className="size-[64px] rounded-full"
                        style={{
                          backgroundImage: `url(${review.img})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                      />
                      <div className="mb-[24px] ml-[24px]">
                        <div className="mb-[4px] text-[24px] font-semibold leading-[32px]">
                          {review.title}
                        </div>
                        <div className="text-[16px] text-[#696777]">
                          {review.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-[16px] leading-[24px] text-[#696777]">
                      {review.text}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mx-[-24px] flex flex-wrap items-end pb-[96px] lg:mx-0">
          <div className="flex-1 rounded-[48px] bg-[#0788F1] p-[32px] lg:h-[356px] lg:p-[60px]">
            <div className="mb-[12px] text-[28px] font-semibold leading-[36px] text-white lg:text-[40px] lg:leading-[48px]">
              Попробуйте, вам понравится!
            </div>
            <div className="mb-[32px] pr-0 font-tiktok text-[20px] font-medium leading-[28px] text-white opacity-80 lg:pr-[30px]">
              Мы поможем собрать вам персональный заказ. ИИ, менеджеры и
              огромная база препаратов - все что нужно для эффективного лечения.
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
      <div className="section">
        <div className="container">
          <h3>Остались вопросы?</h3>
          <h4>FAQ</h4>
          <div className="mt-[40px] xl:mt-[56px]">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </>
  );
};
