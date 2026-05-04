import type React from "react"

interface PricingSectionProps {
  onOpenModal: () => void
}

const liStyle: React.CSSProperties = { display: 'flex', alignItems: 'flex-start', gap: '8px' }
const spanStyle: React.CSSProperties = { marginTop: '4px', flexShrink: 0 }

const PricingSection: React.FC<PricingSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="pricing-section">
      <style>{`
        .pricing-section {
          padding: 100px 30px;
          background-color: #fff;
          position: relative;
          overflow: hidden;
        }
        .pricing-section::before {
          content: "";
          position: absolute;
          top: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: rgba(26, 86, 219, 0.06);
          border-radius: 50%;
          z-index: 0;
        }
        .pricing-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .pricing-title {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(36px, 6vw, 72px);
          color: #0a2d8f;
          text-transform: uppercase;
          margin: 0 0 60px;
          line-height: 1;
        }
        .pricing-title span {
          color: #e3000f;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .pricing-card {
          border-radius: 24px;
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(10,45,143,0.18);
        }
        .pricing-card.basic {
          background: #fdf9f5;
          border: 2px solid #e0d8d0;
        }
        .pricing-card.premium {
          background: #0a2d8f;
          border: 2px solid #0a2d8f;
        }
        .pricing-badge {
          display: inline-block;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 24px;
        }
        .pricing-card.basic .pricing-badge {
          background: #e0d8d0;
          color: #555;
        }
        .pricing-card.premium .pricing-badge {
          background: #e3000f;
          color: #fff;
        }
        .pricing-name {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 28px;
          text-transform: uppercase;
          margin: 0 0 8px;
        }
        .pricing-card.basic .pricing-name { color: #1a1a2e; }
        .pricing-card.premium .pricing-name { color: #fff; }
        .pricing-sub {
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 32px;
        }
        .pricing-card.basic .pricing-sub { color: #888; }
        .pricing-card.premium .pricing-sub { color: rgba(255,255,255,0.6); }
        .pricing-price {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(32px, 4vw, 48px);
          margin: 0 0 8px;
          line-height: 1;
        }
        .pricing-card.basic .pricing-price { color: #0a2d8f; }
        .pricing-card.premium .pricing-price { color: #fff; }
        .pricing-currency {
          font-size: 20px;
          font-weight: 400;
        }
        .pricing-btn {
          display: inline-block;
          margin-top: 36px;
          padding: 16px 36px;
          border-radius: 50px;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }
        .pricing-card.basic .pricing-btn {
          background: #0a2d8f;
          color: #fff;
        }
        .pricing-card.basic .pricing-btn:hover {
          background: #1a56db;
        }
        .pricing-card.premium .pricing-btn {
          background: #e3000f;
          color: #fff;
        }
        .pricing-card.premium .pricing-btn:hover {
          background: #ff1a1a;
        }
        @media (max-width: 700px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          .pricing-section {
            padding: 60px 16px;
          }
          .pricing-card {
            padding: 36px 24px;
          }
        }
      `}</style>
      <div className="pricing-container">
        <h2 className="pricing-title">Наши <span>тарифы</span></h2>
        <div className="pricing-grid">
          <div className="pricing-card basic">
            <div className="pricing-badge">Старт</div>
            <div className="pricing-name">Базовый</div>
            <div className="pricing-sub">Минимум</div>
            <div className="pricing-price">1 200 000 <span className="pricing-currency">руб.</span></div>
            <ul style={{textAlign:'left', margin:'20px 0', padding:'0', lineHeight:'2', fontSize:'17px', color:'#1a5c2e', listStyle:'none', fontFamily:"'Cormorant Garamond', serif", fontWeight:700}}>
              <li style={liStyle}><span style={spanStyle}>✦</span>Сделаем подробный бизнес план</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Оценим финансовые вложения и прогнозируем прибыль</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Создадим логотип по вашему названию и поможем с регистрацией товарного знака</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Разработаем уникальное торговое предложение (что сделает Ваш пансионат особенным и привлекательным)</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Разработаем маркетинговую стратегию (чтобы получить максимальное количество постояльцев)</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Организуем дополнительные потоки доходов</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Приедем в Ваш город для осмотра объекта, где планируется открытие пансионата</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Организуем все работы по СанПИН и пожарным требованиям</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Проведём обучение Вашего персонала</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Подготовим весь пакет внутренней документации и поможем открыть свой собственный пансионат</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Юридически правильно составим договор купли-продажи или договор аренды на объект недвижимости, в котором будет пансионат</li>
            </ul>
            <button onClick={onOpenModal} className="pricing-btn">Оставить заявку</button>
          </div>
          <div className="pricing-card premium">
            <div className="pricing-badge">Хит</div>
            <div className="pricing-name">Персональный</div>
            <div className="pricing-sub">Максимум</div>
            <div className="pricing-price">2 300 000 <span className="pricing-currency">руб.</span></div>
            <ul style={{textAlign:'left', margin:'20px 0', padding:'0', lineHeight:'2', fontSize:'17px', color:'#f5ede0', listStyle:'none', fontFamily:"'Cormorant Garamond', serif", fontWeight:700}}>
              <li style={liStyle}><span style={spanStyle}>✦</span>Сделаем подробный бизнес план</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Оценим финансовые вложения и прогнозируем прибыль</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Создадим логотип по вашему названию и поможем с регистрацией товарного знака</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Разработаем уникальное торговое предложение (что сделает Ваш пансионат особенным и привлекательным)</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Разработаем маркетинговую стратегию (чтобы получить максимальное количество постояльцев)</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Организуем дополнительные потоки доходов</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Приедем в Ваш город для осмотра объекта, где планируется открытие пансионата</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Организуем все работы по СанПИН и пожарным требованиям</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Проведём обучение Вашего персонала</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Подготовим весь пакет внутренней документации и поможем открыть свой собственный пансионат</li>
              <li style={liStyle}><span style={spanStyle}>✦</span>Юридически правильно составим договор купли-продажи или договор аренды на объект недвижимости, в котором будет пансионат</li>
            </ul>
            <div style={{margin:'16px 0 8px', padding:'16px', background:'rgba(255,255,255,0.15)', borderRadius:'12px', border:'2px solid rgba(245,237,224,0.4)'}}>
              <div style={{fontWeight:'700', fontSize:'15px', textTransform:'uppercase', letterSpacing:'2px', marginBottom:'10px', color:'#f5ede0', fontFamily:"'Cormorant Garamond', serif"}}>⭐ Только в этом тарифе</div>
              <ul style={{textAlign:'left', padding:'0', lineHeight:'2', fontSize:'17px', margin:0, color:'#f5ede0', listStyle:'none', fontFamily:"'Cormorant Garamond', serif", fontWeight:700}}>
                <li style={liStyle}><span style={spanStyle}>✦</span>1 год личного сопровождения пансионата</li>
                <li style={liStyle}><span style={spanStyle}>✦</span>Персональный менеджер, который ответит на ваши вопросы</li>
                <li style={liStyle}><span style={spanStyle}>✦</span>Еженедельные онлайн видео-общения с руководителем</li>
              </ul>
            </div>
            <button onClick={onOpenModal} className="pricing-btn">Оставить заявку</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection