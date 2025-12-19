import 'swiper/css';

import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import BuildingsIcon from '../../assets/icons/buildings.svg';
import FirstAidKit from '../../assets/icons/firstAidKit.svg';
import Package from '../../assets/icons/package.svg';
import PillIcon from '../../assets/icons/pill.svg';
import UsersThreeIcon from '../../assets/icons/usersThree.svg';
import AdvImage from '../../assets/images/adv-img.png';
import FuncImage1 from '../../assets/images/func-img1.png';
import FuncImage2 from '../../assets/images/func-img2.png';
import ProcessImage1 from '../../assets/images/process1.svg';
import ProcessImage2 from '../../assets/images/process2.svg';
import ProcessImage3 from '../../assets/images/process3.svg';
import ProductImageMobile from '../../assets/images/product-image-mobile.svg';
import ProductImage from '../../assets/images/product-image.svg';
import ProdImage from '../../assets/images/production.png';
import TryBanner from '../../components/try-banner';

const FUNCTIONS = [
  {
    title: 'Сбор лекарств по рецепту',
    text: 'Наше решение позволяет автоматизировать процесс сбора лекарственных препаратов в персонализированную упаковку.',
    icon: Package,
  },
  {
    title: 'Личный кабинет для врача',
    text: 'Отслеживание, сбор и отправка препаратов с помощью нашей системы позволяет упростить и дополнительно заработать на поставке лекарств пациентам, а также сократить возможные ошибки.',
    icon: FirstAidKit,
  },
  {
    title: 'Личный кабинет пациента',
    text: 'Отслеживание, сбор и отправка препаратов с помощью нашей системы позволяет упростить и дополнительно заработать на поставке лекарств пациентам, а также сократить возможные ошибки.',
    icon: UsersThreeIcon,
  },
  {
    title: 'Упрощение приема лекарств',
    text: 'Пациенту больше не нужно заботиться о том, где и какие лекарства заказывать – мы сделаем все сами. При получении заказа, удобная фасовка препаратов подскажет  когда и сколько лекарства ему необходимо принять.',
    icon: PillIcon,
  },
];
const ADVANTAGES = [
  {
    title: 'Для учреждения',
    text: `<ul>
  <li>
    Повышение качества обслуживания и удовлетворенности клиентов Повышение
  </li>
  <li>подотчетности оборота лекарственных средств в учреждении</li>
  <li>Снижение/перераспределение затрачиваемых людских ресурсов Уникальное</li>
  <li>позиционирование на рынке благодаря инновационному сервису</li>
</ul>`,
    icon: BuildingsIcon,
  },
  {
    title: 'Для персонала',
    text: `<ul>
  <li>
    Снижение количества монотонной и подверженной риску ошибки работы у
    фармацевта, а также снижение психологической нагрузки и уровня стресса у
    медицинского персонала
  </li>
  <li>
    Снижение конфликтности и повышение качества взаимодействия между
    фармацевтами и медсестрами
  </li>
</ul>`,
    icon: FirstAidKit,
  },
  {
    title: 'Для пациентов',
    text: `<ul>
  <li>
    Повышение приверженности лечению (treatment compliance) – фасовка лекарств
    на весь курс лечения способствует повышению самодисциплины пациента
  </li>
  <li>
    Удобство применения – распределение лекарств по времени приема и детальная
    информация на саше избавляет пациента от необходимости все держать в голове
  </li>
  <li>
    Пациент не берет больше или меньше лекарств, чем ему нужно, а именно
    столько, сколько выписано согласно рецепту
  </li>
</ul>
`,
    icon: UsersThreeIcon,
  },
];

export const ProductPage = () => {
  return (
    <>
      <div className="bg-main">
        <div
          className="bg-right-center mx-auto max-w-[1400px] bg-[image:var(--bg-url)] bg-[length:auto] bg-[center_bottom_-235px] bg-no-repeat pb-[400px] pt-[38px] lg:bg-[image:var(--bg-url-desktop)] lg:bg-[length:700px] lg:bg-[right_-50px_bottom_-60px] lg:pb-[128px] lg:pt-[96px] xl:bg-[length:auto]"
          style={{
            '--bg-url': `url(${ProductImageMobile})`,
            '--bg-url-desktop': `url(${ProductImage})`,
          }}
        >
          <div className="container">
            <div className="w-full lg:w-1/2">
              <h1>Комплексный продукт</h1>
              <h2 className="mt-[20px]">
                Для сбора лекарственных препаратов в персональные наборы для
                пациентов клиник
              </h2>
              <div className="mt-[38px] flex flex-col gap-[24px] lg:mt-[48px] xl:flex-row">
                <button className="button-primary">Связаться с нами</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-main">
        <div className="rounded-t-brand-32 bg-white lg:rounded-t-[48px]">
          <div className="section">
            <div className="container">
              <h3>Ключевые функции</h3>
              <div className="mt-[40px] lg:mt-[56px]">
                <div className="hidden flex-wrap lg:flex">
                  {FUNCTIONS.map((item, index) => (
                    <>
                      {index === 2 && (
                        <>
                          <div
                            className="w-1/3 rounded-[48px] bg-cover bg-center"
                            key={index}
                            style={{ backgroundImage: `url(${FuncImage1})` }}
                          />
                          <div
                            className="w-1/3 rounded-[48px] bg-cover bg-center"
                            key={index}
                            style={{ backgroundImage: `url(${FuncImage2})` }}
                          />
                        </>
                      )}
                      <FuncItem item={item} key={index} />
                    </>
                  ))}
                </div>
                <div className="lg:hidden">
                  <Swiper
                    spaceBetween={16}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                  >
                    {FUNCTIONS.map((item, index) => (
                      <SwiperSlide key={index} className="h-auto">
                        <FuncItem item={item} key={index} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:py-[32px]">
            <div className="container">
              <div className="bg-main mx-[-24px] flex flex-col justify-between gap-[32px] rounded-[48px] px-[24px] py-[48px] lg:mx-0 lg:px-[48px] xl:flex-row xl:items-center">
                <div className="">
                  <div className="mb-[4px] font-tiktok text-[24px] font-bold leading-[32px] lg:text-[32px] lg:leading-[40px]">
                    Хотите узнать больше?
                  </div>
                  <div className="text-[20px] leading-[32px] text-[#696777]">
                    Оставьте свои контактные данные — мы свяжемся{' '}
                    <br className="hidden lg:block" />с вами в ближайшее время,
                    чтобы рассказать о нашем сервисе
                  </div>
                </div>
                <button className="button">Связаться с нами</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h3>Глазами клиники и врачей</h3>
          <h4>Процесс</h4>
          <div className="mx-[-24px] mt-[40px] flex flex-wrap lg:mx-0 lg:mt-[56px]">
            <div className="bg-primary overflow-hidden rounded-brand-32 p-[32px] lg:w-1/2 lg:rounded-[48px] lg:p-[48px]">
              <div className="mb-[32px] mt-[-50px] font-tiktok text-[96px] font-bold leading-[96px] text-[#E7F1FB] lg:text-[120px] lg:leading-[120px]">
                01
              </div>
              <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
                Ознакомление с Pax
              </div>
              <div className="text-[16px] leading-[24px] text-[#696777]">
                Врач через собственную систему клиники / личный кабинет Pax
                регистрирует клиента (создается ЛК клиента), вносит общую
                информацию по клиенту.
              </div>
            </div>
            <div className="bg-primary overflow-hidden rounded-brand-32 p-[32px] lg:w-1/2 lg:rounded-[48px] lg:p-[48px]">
              <div className="mb-[32px] mt-[-50px] font-tiktok text-[96px] font-bold leading-[96px] text-[#E7F1FB] lg:text-[120px] lg:leading-[120px]">
                02
              </div>
              <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
                Создание заказа
              </div>
              <div className="text-[16px] leading-[24px] text-[#696777]">
                Врач создает и прикрепляет заказ к созданному клиенту. В заказе
                указываются препараты, их количество, частота приема, период
                приема.
              </div>
            </div>
            <div className="bg-secondary overflow-hidden rounded-brand-32 p-[32px] lg:w-1/2 lg:rounded-[48px] lg:p-[48px]">
              <div className="mb-[32px] mt-[-50px] font-tiktok text-[96px] font-bold leading-[96px] text-[#E0D6F7] lg:text-[120px] lg:leading-[120px]">
                03
              </div>
              <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
                Оплата заказа
              </div>
              <div className="text-[16px] leading-[24px] text-[#696777]">
                Клиент получает уведомление о необходимости оплатить заказ, либо
                заказ оплачивается со стороны клиники, о чем врач указывает в ЛК
                Pax или в системе клинки.
              </div>
            </div>
            <div className="bg-primary overflow-hidden rounded-brand-32 p-[32px] lg:w-1/2 lg:rounded-[48px] lg:p-[48px]">
              <div className="mb-[32px] mt-[-50px] font-tiktok text-[96px] font-bold leading-[96px] text-[#E7F1FB] lg:text-[120px] lg:leading-[120px]">
                04
              </div>
              <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
                Сбор заказа
              </div>
              <div className="text-[16px] leading-[24px] text-[#696777]">
                После оплаты заказа Pax принимает заказ в работу, осуществляет
                сборку, проверку и подготовку заказа.
              </div>
            </div>
            <div className="bg-primary overflow-hidden rounded-brand-32 p-[32px] lg:w-1/2 lg:rounded-[48px] lg:p-[48px]">
              <div className="mb-[32px] mt-[-50px] font-tiktok text-[96px] font-bold leading-[96px] text-[#E7F1FB] lg:text-[120px] lg:leading-[120px]">
                05
              </div>
              <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
                Доставка заказа
              </div>
              <div className="text-[16px] leading-[24px] text-[#696777]">
                После сбора заказа, через сервис Pax индивидуально, либо через
                службу доставки клинки заказ отправляется клиенту. Оповещение
                отправляется через каналы и в ЛК.
              </div>
            </div>
            <div className="bg-main overflow-hidden rounded-brand-32 p-[32px] lg:w-1/2 lg:rounded-[48px] lg:p-[48px]">
              <div className="mb-[32px] mt-[-50px] font-tiktok text-[96px] font-bold leading-[96px] text-[#D0E6F8] lg:text-[120px] lg:leading-[120px]">
                06
              </div>
              <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
                Закрытие заказа
              </div>
              <div className="text-[16px] leading-[24px] text-[#696777]">
                После получения заказа клиентом врач получает уведомление в ЛК.
                При необходимости врач может вести переписку с пациентом в ЛК.
                Заказ закрывается в системе.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mx-[-24px] flex flex-col lg:mx-0 lg:flex-row">
            <div className="bg-primary rounded-brand-32 p-[32px] lg:w-1/2 lg:rounded-[48px] lg:p-[56px]">
              <div className="mb-[16px] font-tiktok text-[28px] font-semibold leading-[36px] lg:mb-[24px] lg:text-[40px] lg:leading-[48px]">
                Производство, которому можно доверять
              </div>
              <div className="mb-[32px] text-[20px] leading-[32px] text-[#696777]">
                Мы собираем ваши лекарства на собственной линии с медицинским
                контролем. Каждая дозировка проходит два этапа проверки —
                автоматикой и фармацевтом.{' '}
              </div>
              <div className="text-[20px] leading-[32px] text-[#696777]">
                Процесс полностью автоматизирован. Для сортировки и сбора
                лекарственных препаратов по рецепту используются передовое
                оборудование и программное обеспечение, разработанное
                специалистами компании.
              </div>
            </div>
            <img
              src={ProdImage}
              alt=""
              className="rounded-brand-32 object-cover lg:w-1/2 lg:rounded-[48px]"
            />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h3>Глазами пациента</h3>
          <h4>Процесс</h4>
          <div className="mx-[-24px] mt-[40px] flex flex-col gap-[16px] md:mx-0 md:mt-[56px] lg:flex-row lg:gap-0">
            <div className="flex flex-col lg:w-1/3">
              <div
                className="relative h-[284px]  rounded-brand-32   md:h-[296px] lg:rounded-[48px]"
                style={{
                  background:
                    'linear-gradient(0deg,rgba(226, 240, 252, 1) 0%, rgba(243, 248, 253, 1) 100%)',
                }}
              >
                <div
                  className="absolute inset-0 bg-[center_bottom_-15px]  bg-no-repeat lg:bg-[length:80%]"
                  style={{
                    backgroundImage: `url(${ProcessImage1})`,
                  }}
                />
              </div>
              <div className="bg-primary flex-1 rounded-brand-32 p-[32px] lg:rounded-[48px] lg:p-[48px]">
                <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
                  Регистрация
                </div>
                <div className="text-[16px] leading-[24px] text-[#696777]">
                  Пациент получает информацию о регистрации в ЛК, после внесение
                  данных о нем через кабинет врача.
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/3">
              <div
                className="relative h-[284px]  rounded-brand-32   md:h-[296px] lg:rounded-[48px]"
                style={{
                  background:
                    'linear-gradient(0deg,rgba(226, 240, 252, 1) 0%, rgba(243, 248, 253, 1) 100%)',
                }}
              >
                <div
                  className="absolute inset-0 bg-[center_bottom_-15px]  bg-no-repeat lg:bg-[length:80%]"
                  style={{
                    backgroundImage: `url(${ProcessImage2})`,
                  }}
                />
              </div>
              <div className="bg-primary flex-1 rounded-brand-32 p-[32px] lg:rounded-[48px] lg:p-[48px]">
                <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
                  Ознакомление с Pax
                </div>
                <div className="text-[16px] leading-[24px] text-[#696777]">
                  Клиент получает возможность отслеживать информацию о своем
                  заказе в режиме реального времени.
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/3">
              <div
                className="relative h-[284px]  rounded-brand-32   md:h-[296px] lg:rounded-[48px]"
                style={{
                  background:
                    'linear-gradient(0deg,rgba(226, 240, 252, 1) 0%, rgba(243, 248, 253, 1) 100%)',
                }}
              >
                <div
                  className="absolute inset-0 bg-[center_bottom]  bg-no-repeat lg:bg-[length:80%]"
                  style={{
                    backgroundImage: `url(${ProcessImage3})`,
                  }}
                />
              </div>
              <div className="bg-primary flex-1 rounded-brand-32 p-[32px] lg:rounded-[48px] lg:p-[48px]">
                <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
                  Получение заказа
                </div>
                <div className="text-[16px] leading-[24px] text-[#696777]">
                  После получения заказа клиент может просматривать информацию о
                  порядке приема и других моментах в ЛК и инструкции на коробке.
                  Также клиент может задать вопрос через чат в ЛК.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h3>Ключевые функции</h3>
          <div className="mt-[40px] lg:mt-[56px]">
            <div className="hidden flex-wrap lg:flex">
              {ADVANTAGES.map((item, index) => (
                <>
                  {index === 0 && (
                    <div
                      className="w-1/2 rounded-[48px] bg-cover bg-center"
                      key={index}
                      style={{ backgroundImage: `url(${AdvImage})` }}
                    />
                  )}
                  <AdvItem item={item} key={index} index={index} />
                </>
              ))}
            </div>
            <div className="lg:hidden">
              <Swiper
                spaceBetween={16}
                modules={[Pagination]}
                pagination={{ clickable: true }}
              >
                {ADVANTAGES.map((item, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <AdvItem item={item} key={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <TryBanner />
    </>
  );
};

const AdvItem = ({ item, index }) => {
  return (
    <div
      className={`advantages size-full rounded-brand-32 lg:rounded-[48px] ${index === 2 ? 'bg-[#E6DDFB]' : 'bg-[#F3F8FD]'} p-[32px] lg:h-auto lg:w-1/2 xl:p-[48px]`}
    >
      <div
        className={`mb-[32px] flex size-[48px] items-center justify-center rounded-full ${index === 2 ? 'bg-[#D8CFED]' : 'bg-[#E3EEF8]'}`}
      >
        <img src={item.icon} alt="" />
      </div>
      <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
        {item.title}
      </div>
      <div dangerouslySetInnerHTML={{ __html: item.text }} />
    </div>
  );
};
const FuncItem = ({ item }) => {
  return (
    <div className="size-full rounded-brand-32 bg-[#F3F8FD] p-[32px] lg:h-auto lg:w-1/3 lg:rounded-[48px] xl:p-[48px]">
      <div className="mb-[32px] flex size-[48px] items-center justify-center rounded-full bg-[#E3EEF8]">
        <img src={item.icon} alt="" />
      </div>
      <div className="mb-[12px] font-tiktok text-[24px] font-semibold leading-[32px]">
        {item.title}
      </div>
      <div className="text-[16px] leading-[24px] text-[#696777]">
        {item.text}
      </div>
    </div>
  );
};
