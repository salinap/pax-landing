import { useState } from 'react';

const faqs = [
  {
    question: 'В чем польза PAX?',
    answer:
      'Я использовал это лекарство в течение двух недель, и результаты превзошли все ожидания. Оно быстро помогло облегчить симптомы, а побочные эффекты были минимальными. Рекомендую всем, кто ищет эффективное и безопасное решение! Я использовал это лекарство в течение двух недель, и результаты превзошли все ожидания. Оно быстро помогло облегчить симптомы, а побочные эффекты были минимальными. Рекомендую всем, кто ищет эффективное и безопасное решение!',
  },
  {
    question: 'Как сделать заказ?',
    answer:
      'Вы можете оформить заказ через официальный сайт, следуя простым шагам.',
  },
  {
    question: 'Как воспользоваться сервисом и зарегистрироваться?',
    answer:
      'Регистрация проста: укажите электронную почту, создайте пароль и подтвердите аккаунт.',
  },
  {
    question: 'Могу ли я сделать заказ из другой страны?',
    answer:
      'Да, доставка доступна в большинстве стран. Подробности уточняйте при оформлении заказа.',
  },
  {
    question: 'Могу ли я сделать заказ из другой страны?',
    answer:
      'Да, доставка доступна в большинстве стран. Подробности уточняйте при оформлении заказа.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-[-24px] flex flex-col gap-[16px] lg:mx-auto">
      {faqs.map((item, index) => (
        <div
          key={index}
          className="flex cursor-pointer"
          onClick={() => toggle(index)}
        >
          <div
            className={` flex-1 rounded-[36px] px-[24px] py-[36px] lg:px-[36px] ${
              openIndex === index ? 'bg-main' : 'bg-primary'
            }`}
          >
            <div className="mb-[8px] font-tiktok text-[24px] font-semibold">
              {item.question}
            </div>
            <div
              className={`text-[16px] leading-[24px] text-[#696777] transition-all duration-300 ${
                openIndex === index
                  ? 'max-h-[1000px] opacity-100'
                  : 'max-h-0 overflow-hidden opacity-0'
              }`}
            >
              {item.answer}
            </div>
          </div>
          <button
            className={`flex items-center justify-center rounded-[36px] px-[22px] text-[32px] font-light ${
              openIndex === index ? 'bg-main' : 'bg-primary'
            }`}
          >
            {openIndex === index ? '−' : '+'}
          </button>
        </div>
      ))}
    </div>
  );
}
