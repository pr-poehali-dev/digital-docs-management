import type React from "react"

interface HeroSectionProps {
  currentText: string
  onOpenModal: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ currentText, onOpenModal }) => {
  return (
    <section className="info-section">
      <div className="left-part">
        <h1>
          <span className="d-flex">
            {["О", "Т", "К", "Р", "О", "Й", "Т", "Е", " "].map((char, index) => (
              <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className="text tracking-tighter">{currentText}</span>
        </h1>
        <p className="tracking-widest" style={{ fontWeight: 700 }}>
          Быстро и эффективно поможем Вам открыть высокодоходный социальный бизнес — пансионат для пожилых в любом городе страны.
        </p>
        <p style={{ color: "#e3000f", fontFamily: "Montserrat", fontWeight: 700, fontSize: "36px", margin: "16px 0 0", letterSpacing: "1px" }}>
          8-900-055-40-45
        </p>
        <button onClick={onOpenModal} className="book-link" style={{background:'none', border:'none', cursor:'pointer', padding:0}}>
          <span className="linktext tracking-tighter text-3xl">Оставить заявку</span>
          <span className="arrow">
            <span></span>
          </span>
        </button>
      </div>
      <div className="right-part">
        <div className="particles-container">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 15}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        <div className="bg-line">
          <img
            src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
            alt="Line"
            style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
          />
          <img
            src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
            alt="Line"
            style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
          />
        </div>
        <img
          src="https://cdn.poehali.dev/projects/68a6caea-ef68-4431-8bf3-bf4c974f1d77/files/5ebb1c87-c1f7-4060-95f8-a7f550c6391c.jpg"
          alt="Пансионат для пожилых"
          className="hero-image"
        />
        <div className="bg-dash-circle">
          <img
            src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
            alt="dash-circle"
            style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
