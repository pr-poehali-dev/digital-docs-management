import type React from "react"

const StepsSection: React.FC = () => {
  return (
    <section className="steps-section">
      <style>{`
        .steps-section {
          padding: 100px 30px;
          background-color: #f5f0eb;
          position: relative;
        }
        .steps-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .steps-title {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(36px, 6vw, 72px);
          color: #0a2d8f;
          text-transform: uppercase;
          margin: 0 0 60px;
          line-height: 1;
        }
        .steps-title span {
          color: #e3000f;
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .step-card {
          background: #fff;
          border-radius: 20px;
          padding: 36px 28px;
          position: relative;
          box-shadow: 0 4px 24px rgba(10,45,143,0.07);
          border-top: 4px solid #1a56db;
        }
        .step-number {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 56px;
          color: #e3000f;
          line-height: 1;
          margin-bottom: 16px;
          display: inline-block;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .step-card:hover .step-number {
          transform: translateY(-8px) scale(1.15) rotate(-6deg);
        }
        .step-text {
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #1a1a2e;
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .steps-section {
            padding: 60px 16px;
          }
        }
      `}</style>
      <div className="steps-container">
        <h2 className="steps-title">Этапы <span>запуска</span></h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <p className="step-text">Оставляете заявку</p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <p className="step-text">Наш специалист связывается с вами для уточнения деталей</p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <p className="step-text">Заключаем договор, производите оплату</p>
          </div>
          <div className="step-card">
            <div className="step-number">04</div>
            <p className="step-text">Исполняем условия договора</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsSection