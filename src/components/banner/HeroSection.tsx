import type React from "react"
import { useState, useEffect } from "react"

const HERO_IMAGES = [
  "https://cdn.poehali.dev/projects/68a6caea-ef68-4431-8bf3-bf4c974f1d77/files/5ebb1c87-c1f7-4060-95f8-a7f550c6391c.jpg",
  "https://cdn.poehali.dev/projects/68a6caea-ef68-4431-8bf3-bf4c974f1d77/bucket/21cdb1f0-dff3-430f-984a-f6ba350fdedf.jpeg",
  "https://cdn.poehali.dev/projects/68a6caea-ef68-4431-8bf3-bf4c974f1d77/bucket/8bab2da3-b443-48ad-ba73-bdfdcb139e04.jpg",
]

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % HERO_IMAGES.length)
        setFading(false)
      }, 600)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{`
        .hero-slider-img {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 80%; height: 70%;
          object-fit: cover;
          object-position: center;
          z-index: 2;
          border-radius: 12px;
          opacity: 0.9;
          transition: opacity 0.6s ease;
        }
        .hero-slider-img.fading { opacity: 0; }
        .hero-slider-dots {
          position: absolute;
          bottom: 12px; left: 50%;
          transform: translateX(-50%);
          display: flex; gap: 6px;
          z-index: 3;
        }
        .hero-slider-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          transition: background 0.3s;
          cursor: pointer;
          border: none; padding: 0;
        }
        .hero-slider-dot.active { background: #e3000f; }
      `}</style>
      <img
        src={HERO_IMAGES[current]}
        alt="Пансионат для пожилых"
        className={`hero-slider-img${fading ? ' fading' : ''}`}
      />
      <div className="hero-slider-dots">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`hero-slider-dot${i === current ? ' active' : ''}`}
            onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false) }, 600) }}
          />
        ))}
      </div>
    </>
  )
}

interface HeroSectionProps {
  currentText: string
  onOpenModal: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ currentText, onOpenModal }) => (
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
        Быстро и эффективно поможем открыть высокодоходный социальный бизнес пансионат для пожилых <span style={{color:'#e3000f'}}>в любом городе страны</span> — с нуля, под ключ, с опытным наставником рядом.
      </p>
      <p style={{ color: "#e3000f", fontFamily: "Montserrat", fontWeight: 700, fontSize: "36px", margin: "16px 0 0", letterSpacing: "1px" }}>
        8-900-055-40-45
      </p>
      <button onClick={onOpenModal} className="book-link" style={{background:'none', border:'none', cursor:'pointer', padding:0}}>
        <span className="linktext tracking-tighter text-3xl">Оставить заявку</span>
        <span className="arrow"><span></span></span>
      </button>
    </div>
    <div className="right-part">
      <div className="particles-container">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="particle" style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 15}s`,
            animationDelay: `${Math.random() * 10}s`,
          }} />
        ))}
      </div>
      <div className="bg-line">
        <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="Line" style={{ filter: "hue-rotate(280deg) saturate(1.5)" }} />
        <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="Line" style={{ filter: "hue-rotate(280deg) saturate(1.5)" }} />
      </div>
      <HeroSlider />
      <div className="bg-dash-circle">
        <img src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg" alt="dash-circle" style={{ filter: "hue-rotate(280deg) saturate(1.5)" }} />
      </div>
    </div>
  </section>
)

export default HeroSection