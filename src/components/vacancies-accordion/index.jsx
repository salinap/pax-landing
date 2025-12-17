import { useState } from 'react';

const vacancies = [
  {
    question: 'Middle Java developer',
    tags: ['Удаленно', 'Полный день'],
    body: `
      <p>Обязанности</p>
      <ul>
        <li>Разработка и развитие backend-сервисов на современном стеке Java 17 / Spring Boot 3</li>
        <li>Участие в проектировании архитектуры и интеграции микросервисов</li>
        <li>Оптимизация производительности и рефакторинг существующего кода</li>
        <li>Совместная работа с командой аналитиков, QA и frontend-разработчиков</li>
      </ul>
      <p>Требования</p>
      <ul>
        <li>Опыт коммерческой разработки на Java от 2 лет</li>
        <li>Отличное знание Spring Boot, Spring Data, Spring Security</li>
        <li>Опыт создания и интеграции REST API</li>
        <li>Работа с PostgreSQL, Git, Maven / Gradle</li>
        <li>Понимание ООП, SOLID, принципов чистого кода</li>
        <li>Будет плюсом: Docker, Kubernetes, Kafka</li>
      </ul>
      <p>Условия</p>
      <ul>
        <li>Полностью удалённый формат и гибкий график</li>
        <li>Команда сильных инженеров и открытая инженерная культура</li>
        <li>Возможности профессионального роста и обучения</li>
        <li>Участие в масштабных fintech-проектах</li>
      </ul>
    `,
  },
];

export default function VacanciesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-[-24px] flex flex-col gap-[16px] lg:mx-auto">
      {[...vacancies, ...vacancies, ...vacancies, ...vacancies].map(
        (item, index) => (
          <div
            key={index}
            className="flex cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div
              className={`flex-1 rounded-brand-32 px-[24px] py-[32px] lg:px-[32px] ${
                openIndex === index ? 'bg-main' : 'bg-primary'
              }`}
            >
              <div className="mb-[8px] flex flex-col lg:flex-row lg:items-center">
                <div className="font-tiktok text-[20px] font-semibold lg:text-[24px]">
                  {item.question}
                </div>
                <div className="mt-[16px] flex gap-[16px] lg:ml-auto lg:mt-0">
                  {item.tags.map((item) => (
                    <div
                      className="rounded-full px-[10px] py-[6px] text-[14px] leading-[20px] text-[#0788F1] lg:px-[16px] lg:py-[8px] lg:text-[16px] lg:leading-[24px]"
                      style={{ backgroundColor: 'rgba(7, 136, 241, 0.08)' }}
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={` transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <div
                  className="vacancie"
                  dangerouslySetInnerHTML={{
                    __html: item.body,
                  }}
                ></div>
                <button className="header__button mt-[32px]">
                  Откликнуться
                </button>
              </div>
            </div>
            <button
              className={`flex items-center justify-center rounded-brand-32 px-[22px] text-[32px] font-light ${
                openIndex === index ? 'bg-main' : 'bg-primary'
              }`}
            >
              {openIndex === index ? '−' : '+'}
            </button>
          </div>
        ),
      )}
    </div>
  );
}
