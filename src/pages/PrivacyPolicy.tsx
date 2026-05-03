import type React from "react"
import { useEffect } from "react"

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: '#f5f0eb', minHeight: '100vh', fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
        .pp-wrap {
          max-width: 860px;
          margin: 0 auto;
          padding: 80px 30px 100px;
        }
        .pp-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #0a2d8f;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 48px;
          transition: opacity 0.2s;
        }
        .pp-back:hover { opacity: 0.7; }
        .pp-title {
          font-size: clamp(28px, 5vw, 52px);
          font-weight: 700;
          color: #0a2d8f;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0 0 8px;
        }
        .pp-title span { color: #e3000f; }
        .pp-date {
          font-size: 13px;
          color: #999;
          margin-bottom: 48px;
        }
        .pp-card {
          background: #fff;
          border-radius: 20px;
          padding: 48px 48px;
          box-shadow: 0 4px 32px rgba(10,45,143,0.07);
        }
        .pp-section-title {
          font-size: 17px;
          font-weight: 700;
          color: #0a2d8f;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 36px 0 12px;
          padding-bottom: 8px;
          border-bottom: 2px solid #f0eae4;
        }
        .pp-section-title:first-child { margin-top: 0; }
        .pp-text {
          font-size: 15px;
          color: #444;
          line-height: 1.9;
          margin: 0 0 12px;
        }
        .pp-list {
          margin: 8px 0 12px;
          padding-left: 20px;
        }
        .pp-list li {
          font-size: 15px;
          color: #444;
          line-height: 1.9;
          margin-bottom: 4px;
        }
        .pp-highlight {
          background: rgba(10,45,143,0.05);
          border-left: 4px solid #0a2d8f;
          border-radius: 0 10px 10px 0;
          padding: 14px 20px;
          margin: 16px 0;
          font-size: 15px;
          color: #333;
          line-height: 1.8;
        }
        @media (max-width: 600px) {
          .pp-wrap { padding: 48px 16px 80px; }
          .pp-card { padding: 28px 20px; }
        }
      `}</style>
      <div className="pp-wrap">
        <a href="/" className="pp-back">← На главную</a>
        <h1 className="pp-title">Политика <span>конфиденциальности</span></h1>
        <div className="pp-date">Актуально с 1 января 2024 года</div>

        <div className="pp-card">
          <div className="pp-section-title">1. Общие положения</div>
          <p className="pp-text">
            Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных физических лиц, которые используют сайт и оставляют заявки на получение услуг.
          </p>
          <p className="pp-text">
            Оператором персональных данных является Маньянов Ринат Хамитович (далее — «Оператор»).
          </p>
          <div className="pp-highlight">
            Используя сайт и заполняя формы обратной связи, вы даёте добровольное согласие на обработку ваших персональных данных в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
          </div>

          <div className="pp-section-title">2. Какие данные мы собираем</div>
          <p className="pp-text">При заполнении формы заявки мы собираем следующие данные:</p>
          <ul className="pp-list">
            <li>ФИО (фамилия, имя, отчество)</li>
            <li>Номер телефона</li>
            <li>Адрес электронной почты (e-mail)</li>
          </ul>

          <div className="pp-section-title">3. Цели обработки персональных данных</div>
          <p className="pp-text">Собранные данные используются исключительно в следующих целях:</p>
          <ul className="pp-list">
            <li>Обратная связь с потенциальным клиентом по оставленной заявке</li>
            <li>Предоставление консультаций об услугах компании</li>
            <li>Заключение и исполнение договора на оказание услуг</li>
          </ul>

          <div className="pp-section-title">4. Передача данных третьим лицам</div>
          <p className="pp-text">
            Оператор не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных действующим законодательством Российской Федерации.
          </p>

          <div className="pp-section-title">5. Хранение и защита данных</div>
          <p className="pp-text">
            Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, либо до момента отзыва согласия субъектом персональных данных. Оператор принимает необходимые организационные и технические меры для защиты данных от несанкционированного доступа.
          </p>

          <div className="pp-section-title">6. Права субъекта персональных данных</div>
          <p className="pp-text">Вы вправе в любое время:</p>
          <ul className="pp-list">
            <li>Запросить информацию об обработке ваших персональных данных</li>
            <li>Потребовать уточнения, блокировки или уничтожения своих данных</li>
            <li>Отозвать согласие на обработку персональных данных</li>
          </ul>
          <p className="pp-text">
            Для реализации своих прав обратитесь к Оператору по телефону: <strong>8-900-055-40-45</strong>
          </p>

          <div className="pp-section-title">7. Изменение политики</div>
          <p className="pp-text">
            Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
