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
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 70%;
          object-fit: cover;
          object-position: center;
          z-index: 2;
          border-radius: 12px;
          opacity: 0.9;
          transition: opacity 0.6s ease;
        }
        .hero-slider-img.fading {
          opacity: 0;
        }
        .hero-slider-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 3;
        }
        .hero-slider-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          transition: background 0.3s;
          cursor: pointer;
          border: none;
          padding: 0;
        }
        .hero-slider-dot.active {
          background: #e3000f;
        }
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

const PhotographyBanner: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ fio: '', phone: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setShowModal(false)
      setSubmitted(false)
      setFormData({ fio: '', phone: '', email: '' })
    }, 2000)
  }

  const texts = ["ПАНСИОНАТ", "БИЗНЕС"]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Inter:wght@400&display=swap');

        .photography-banner,
        .photography-banner * {
          box-sizing: border-box;
        }

        .photography-banner {
          margin: 0;
          background-color: #f5f0eb;
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
        }

        .photography-banner *::selection {
          background-color: rgba(241, 231, 40, 0.2);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #e3000f;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        .left-part {
          padding: 20px 0 0;
          overflow: visible;
        }

        .left-part h1 {
          margin: 0;
          color: #1a1a2e;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 12vw, 160px);
          line-height: 0.75;
          font-style: normal;
          text-transform: uppercase;
        }

        .left-part h1 .text {
          color: #e3000f;
          display: block;
          height: clamp(80px, 10vw, 120px);
          font-size: clamp(48px, 9vw, 120px);
          white-space: nowrap;
          overflow: visible;
        }

        .left-part h1 .d-flex {
          font-size: clamp(56px, 10vw, 134px);
          display: flex;
          align-items: center;
          color: #0a2d8f;
          margin-bottom: 16px;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 72%;
          margin: 20px 0 0;
          color: #333;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 2;
          font-family: "Montserrat";
          opacity: 0.8;
        }

        .book-link {
          margin: 40px 0 0;
          padding: 0;
          border: 0;
          font-size: 56px;
          line-height: 1;
          color: #1a56db;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          font-family: "Montserrat";
          font-weight: 300;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 28px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
        }

        .book-link .linktext {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .book-link .linktext::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 6px;
          width: 100%;
          height: 3px;
          background-color: #1a56db;
          transform: scaleX(1);
          transition: transform 250ms ease-in-out;
          transform-origin: 0 0;
        }

        .book-link:hover .linktext:before {
          transform: scaleX(0);
          transform-origin: 100% 100%;
        }

        .book-link .arrow {
          height: 36px;
          width: 36px;
          top: -5px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .book-link .arrow::before,
        .book-link .arrow::after {
          position: absolute;
          content: "";
          background-color: #e3000f;
          transition: all ease-in-out 0.35s;
          transform-origin: 0 0;
          border-radius: 30px;
        }

        .book-link .arrow::before {
          height: 2px;
          width: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow::after {
          width: 2px;
          height: 100%;
          top: 0;
          right: 0;
        }

        .book-link:hover .arrow::before {
          width: 65%;
        }

        .book-link:hover .arrow::after {
          height: 65%;
        }

        .book-link .arrow span {
          background-color: #e3000f;
          height: 2px;
          width: 100%;
          display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px);
          transform-origin: right top;
          border-radius: 30px;
          position: relative;
          transition: all ease-in-out 0.35s;
          position: absolute;
          top: 0;
          left: 0;
        }

        .book-link .arrow span::before {
          background-color: #e3000f;
          content: "";
          height: 100%;
          width: 15px;
          left: -15px;
          top: 0;
          position: absolute;
        }

        .right-part {
          background-color: transparent;
          height: 588px;
          width: 588px;
          margin: 0 0 0 auto;
          margin-right: -14px;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #e3000f;
          filter: blur(112px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: 50%;
          right: 33%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(211, 54, 130, 0.6);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(203, 75, 22, 0.4);
        }

        .particle:nth-child(3n) {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes float {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .bg-line {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 85px;
          z-index: -1;
          overflow: hidden;
          display: flex;
          display: -webkit-flex;
          white-space: nowrap;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        .bg-dash-circle {
          position: absolute;
          bottom: -35px;
          right: -13px;
          z-index: -1;
          width: 180px;
          aspect-ratio: 1/1;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .hero-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: auto;
          z-index: 2;
          border-radius: 12px;
          opacity: 0.9;
        }

        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .bg-dash-circle {
            width: 130px;
          }
        }

        @media screen and (max-width: 767px) {
          .photography-banner {
            overflow-x: hidden;
          }

          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
          }

          .bg-line {
            height: 52px;
          }

          .left-part {
            padding: 40px 16px 60px;
            overflow: visible;
          }

          .right-part {
            height: 334px;
            width: 334px;
            margin: 0 auto;
            margin-right: auto;
          }

          .left-part h1 .text {
            height: 88px;
          }

          .left-part p {
            font-size: 12px;
            width: 96%;
          }

          .bg-dash-circle {
            width: 80px;
          }
        }

        .features-section {
          padding: 100px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .features-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #e3000f;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: -1;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 60px;
          align-items: center;
        }

        .features-content h2 {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 120px);
          line-height: 0.9;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .features-content h2 .highlight {
          color: #e3000f;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          padding: 25px 0;
          border-bottom: 1px solid #333;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: #e3000f;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          color: #002b36;
          flex-shrink: 0;
        }

        .feature-text h3 {
          color: #fff;
          font-family: "Montserrat";
          font-size: 18px;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .feature-text p {
          color: #aaa;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          margin: 0;
          line-height: 1.6;
        }

        .testimonials-section {
          padding: 100px 30px;
          background-color: #002b36;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #e3000f;
          filter: blur(120px);
          height: 50%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: -15%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonials-title {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 100px);
          line-height: 0.9;
          margin: 0 0 80px;
          text-transform: uppercase;
        }

        .testimonials-marquee {
          display: flex;
          animation: scroll 30s linear infinite;
          gap: 40px;
          width: max-content;
        }

        .testimonials-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 20px;
          padding: 40px 30px;
          position: relative;
          backdrop-filter: blur(10px);
          width: 400px;
          flex-shrink: 0;
        }

        .testimonial-quote {
          color: #fff;
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 30px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          font-family: "Inter", sans-serif;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #e3000f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #002b36;
        }

        .author-info h4 {
          color: #cb4b16;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          margin: 0;
          text-transform: uppercase;
        }

        .author-info p {
          color: #aaa;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          margin: 5px 0 0;
        }

        .cta-section {
          padding: 120px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.6;
          background: #e3000f;
          filter: blur(180px);
          height: 60%;
          width: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(80px, 12vw, 160px);
          line-height: 0.8;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .cta-subtitle {
          color: #e3000f;
          font-family: "Montserrat";
          font-size: 26px;
          line-height: 1.6;
          margin: 0 0 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 18px 40px;
          background: #e3000f;
          color: #002b36;
          text-decoration: none;
          font-family: "Montserrat";
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid #e3000f;
        }

        .cta-button:hover {
          background: transparent;
          color: #e3000f;
        }

        .cta-button.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
        }

        .cta-button.secondary:hover {
          background: transparent;
          color: #e3000f;
          border: 2px solid #e3000f;
        }

        @media screen and (max-width: 1199px) {
          .features-section,
          .testimonials-section,
          .cta-section {
            padding: 80px 20px;
          }
          .features-container {
            gap: 40px;
          }
          .testimonials-marquee {
            gap: 30px;
          }
          .cta-buttons {
            gap: 20px;
          }
        }

        @media screen and (max-width: 767px) {
          .features-section,
          .testimonials-section,
          .cta-section {
            padding: 60px 16px;
          }
          .features-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .testimonials-marquee {
            gap: 25px;
          }
          .testimonial-card {
            padding: 30px 20px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <div className="photography-banner">
        <main>
          <section className="info-section" id="home">
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
                Быстро и эффективно поможем открыть высокодоходный социальный бизнес, пансионат для пожилых и инвалидов <span style={{color:'#e3000f'}}>в любом городе страны</span> — с нуля, под ключ, с опытным наставником рядом с поддержкой 12 месяцев.
              </p>
              <p style={{ color: "#e3000f", fontFamily: "Montserrat", fontWeight: 700, fontSize: "36px", margin: "16px 0 0", letterSpacing: "1px" }}>
                8-900-055-40-45
              </p>
              <button onClick={() => setShowModal(true)} className="book-link" style={{background:'none', border:'none', cursor:'pointer', padding:0}}>
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
              <HeroSlider />
              <div className="bg-dash-circle">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                  alt="dash-circle"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
            </div>
          </section>

          <section className="features-section" style={{display:'none'}}>
            <div className="features-container">
              <div className="features-content">
                <h2>Что вы получите?</h2>
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-icon">01</div>
                  <div className="feature-text">
                    <h3>Готовая бизнес-модель</h3>
                    <p className="font-light tracking-wider">
                      Пошаговый план открытия пансионата: от выбора помещения и персонала до получения лицензии и первых клиентов
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">02</div>
                  <div className="feature-text">
                    <h3>Юридическая база</h3>
                    <p className="tracking-wider">
                      Все документы, договоры и регламенты для легального ведения бизнеса по уходу за пожилыми
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">03</div>
                  <div className="feature-text">
                    <h3>Наставник из практики</h3>
                    <p className="tracking-wider">
                      Обучение от действующих владельцев пансионатов — делятся реальным опытом и разбирают ваши кейсы
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">04</div>
                  <div className="feature-text">
                    <h3>Сообщество предпринимателей</h3>
                    <p className="tracking-wider">
                      Закрытый чат выпускников, партнёрства и поддержка даже после окончания курса
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="testimonials-section" style={{display:'none'}}>
            <div className="testimonials-container">
              <h2 className="testimonials-title">Отзывы выпускников</h2>
              <div className="testimonials-marquee">
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Открыла пансионат на 12 мест через 4 месяца после курса. Уже окупила вложения и думаю о расширении!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">НП</div>
                    <div className="author-info">
                      <h4>Наталья Петрова</h4>
                      <p>Владелец пансионата, Краснодар</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Боялся бюрократии и проверок. После обучения всё стало понятно — получил лицензию без единой ошибки."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">ИВ</div>
                    <div className="author-info">
                      <h4>Игорь Волошин</h4>
                      <p>Владелец пансионата, Ростов-на-Дону</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Курс дал всё: от поиска помещения до работы с семьями постояльцев. Уже 8 месяцев работаем в плюс."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">ЕС</div>
                    <div className="author-info">
                      <h4>Елена Соколова</h4>
                      <p>Основатель пансионата, Самара</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Открыла пансионат на 12 мест через 4 месяца после курса. Уже окупила вложения и думаю о расширении!"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">НП</div>
                    <div className="author-info">
                      <h4>Наталья Петрова</h4>
                      <p>Владелец пансионата, Краснодар</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Боялся бюрократии и проверок. После обучения всё стало понятно — получил лицензию без единой ошибки."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">ИВ</div>
                    <div className="author-info">
                      <h4>Игорь Волошин</h4>
                      <p>Владелец пансионата, Ростов-на-Дону</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Курс дал всё: от поиска помещения до работы с семьями постояльцев. Уже 8 месяцев работаем в плюс."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">ЕС</div>
                    <div className="author-info">
                      <h4>Елена Соколова</h4>
                      <p>Основатель пансионата, Самара</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="steps-section" id="steps">
            <style>{`
              .steps-section {
                padding: 100px 30px;
                background-color: #0a2d8f;
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
                color: #fff;
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
                overflow: hidden;
                position: relative;
                box-shadow: 0 4px 24px rgba(10,45,143,0.15);
                border-top: 4px solid #1a56db;
                display: flex;
                flex-direction: column;
              }
              .step-card-img {
                width: 100%;
                height: 180px;
                object-fit: cover;
                display: block;
              }
              .step-card-body {
                padding: 24px 24px 28px;
                flex: 1;
              }
              .step-number {
                font-family: "Montserrat", sans-serif;
                font-weight: 700;
                font-size: 48px;
                color: #e3000f;
                line-height: 1;
                margin-bottom: 12px;
              }
              .step-text {
                font-family: "Montserrat", sans-serif;
                font-size: 15px;
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
                .step-card-img {
                  height: 200px;
                }
              }
            `}</style>
            <div className="steps-container">
              <h2 className="steps-title">Этапы <span>запуска</span></h2>
              <div className="steps-grid">
                <div className="step-card">
                  <img className="step-card-img" src="https://cdn.poehali.dev/projects/68a6caea-ef68-4431-8bf3-bf4c974f1d77/files/edea822d-345b-45e2-bd86-4919b2121a90.jpg" alt="Оставляете заявку" />
                  <div className="step-card-body">
                    <div className="step-number">01</div>
                    <p className="step-text">Оставляете заявку</p>
                  </div>
                </div>
                <div className="step-card">
                  <img className="step-card-img" src="https://cdn.poehali.dev/projects/68a6caea-ef68-4431-8bf3-bf4c974f1d77/files/fac38271-a9a2-44e1-b35d-e7128803e8b6.jpg" alt="Специалист связывается" />
                  <div className="step-card-body">
                    <div className="step-number">02</div>
                    <p className="step-text">Наш специалист связывается с вами для уточнения деталей</p>
                  </div>
                </div>
                <div className="step-card">
                  <img className="step-card-img" src="https://cdn.poehali.dev/projects/68a6caea-ef68-4431-8bf3-bf4c974f1d77/files/aa1adda4-7030-4f1a-a416-5fc09f3f6e4b.jpg" alt="Заключаем договор" />
                  <div className="step-card-body">
                    <div className="step-number">03</div>
                    <p className="step-text">Заключаем договор</p>
                  </div>
                </div>
                <div className="step-card">
                  <img className="step-card-img" src="https://cdn.poehali.dev/projects/68a6caea-ef68-4431-8bf3-bf4c974f1d77/files/c752e4c4-7e86-4847-b128-df407443430a.jpg" alt="Исполняем договор" />
                  <div className="step-card-body">
                    <div className="step-number">04</div>
                    <p className="step-text">Исполняем условия договора</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="founder-section" id="founder">
            <style>{`
              .founder-section {
                padding: 100px 30px;
                background-color: #f5f0eb;
                background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
                background-size: cover;
                background-repeat: no-repeat;
                position: relative;
                overflow: hidden;
              }
              .founder-section::before {
                content: "";
                position: absolute;
                top: -80px;
                right: -80px;
                width: 400px;
                height: 400px;
                background: rgba(227,0,15,0.1);
                border-radius: 50%;
                filter: blur(80px);
                z-index: 0;
              }
              .founder-container {
                max-width: 1100px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                align-items: center;
                position: relative;
                z-index: 1;
              }
              .founder-label {
                font-family: "Montserrat", sans-serif;
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 3px;
                color: #e3000f;
                margin-bottom: 20px;
              }
              .founder-title {
                font-family: "Montserrat", sans-serif;
                font-weight: 700;
                font-size: clamp(28px, 4vw, 48px);
                color: #1a1a2e;
                line-height: 1.1;
                margin: 0 0 8px;
              }
              .founder-title span {
                color: #0a2d8f;
              }
              .founder-role {
                font-family: "Montserrat", sans-serif;
                font-size: 15px;
                font-weight: 600;
                color: #888;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin: 0 0 32px;
              }
              .founder-text {
                font-family: "Cormorant Garamond", serif;
                font-size: 20px;
                font-weight: 600;
                color: #1a1a2e;
                line-height: 1.8;
                margin: 0 0 20px;
              }
              .founder-badge {
                display: inline-flex;
                align-items: center;
                gap: 12px;
                background: rgba(10,45,143,0.07);
                border: 1px solid rgba(10,45,143,0.2);
                border-radius: 50px;
                padding: 12px 24px;
                margin-top: 8px;
              }
              .founder-badge-icon {
                font-size: 24px;
              }
              .founder-badge-text {
                font-family: "Montserrat", sans-serif;
                font-weight: 700;
                font-size: 15px;
                color: #0a2d8f;
              }
              .founder-video-wrap {
                position: relative;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 24px 60px rgba(0,0,0,0.4);
                background: #000;
                aspect-ratio: 16/9;
              }
              .founder-video-wrap iframe {
                width: 100%;
                height: 100%;
                border: none;
                display: block;
              }
              .founder-video-placeholder {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #0a2d8f 0%, #073642 100%);
                color: rgba(255,255,255,0.4);
                font-family: "Montserrat", sans-serif;
                font-size: 14px;
                gap: 12px;
                min-height: 280px;
                border-radius: 20px;
                border: 2px dashed rgba(255,255,255,0.15);
              }
              .founder-video-placeholder-icon {
                font-size: 48px;
                opacity: 0.5;
              }
              @media (max-width: 900px) {
                .founder-container {
                  grid-template-columns: 1fr;
                  gap: 40px;
                }
              }
              @media (max-width: 560px) {
                .founder-section {
                  padding: 60px 16px;
                }
              }
            `}</style>
            <div className="founder-container">
              <div>
                <div className="founder-label">О нас</div>
                <h2 className="founder-title"><span>Маньянов Ринат Хамитович</span></h2>
                <div className="founder-role">Основатель и руководитель пансионата для пожилых и инвалидов "До 100 лет"</div>
                <p className="founder-text">
                  Ринат Хамитович — человек, который превратил заботу о пожилых людях в настоящее призвание. Более <strong style={{color:'#e3000f', fontSize:'1.25em'}}>10 лет</strong> он строит социальный бизнес, который меняет жизни.
                </p>
                <p className="founder-text">
                  Каждый шаг этого пути он прошёл лично: от поиска первого помещения до встречи с первыми постояльцами. Сегодня он передаёт этот живой опыт, тем кто хочет начать этот бизнес и реально добиться высоких результатов.
                </p>
                <div className="founder-badge">
                  <span className="founder-badge-icon">🏆</span>
                  <span className="founder-badge-text">Более 10 лет в социальной сфере</span>
                </div>
              </div>
              <div className="founder-video-wrap">
                <div className="founder-video-placeholder">
                  <span className="founder-video-placeholder-icon">▶</span>
                  <span>Вставьте ссылку на видео</span>
                </div>
              </div>
            </div>
          </section>

          <section className="pricing-section" id="pricing">
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
                  <div className="pricing-price">1 200 000 <span className="pricing-currency">руб.</span></div>
                  <ul style={{textAlign:'left', margin:'20px 0', padding:'0', lineHeight:'2', fontSize:'17px', color:'#1a5c2e', listStyle:'none', fontFamily:"'Cormorant Garamond', serif", fontWeight:700}}>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Сделаем подробный бизнес план</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Оценим финансовые вложения и прогнозируем прибыль</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Создадим логотип по вашему названию и поможем с регистрацией товарного знака</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Разработаем уникальное торговое предложение (что сделает Ваш пансионат особенным и привлекательным)</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Разработаем маркетинговую стратегию (чтобы получить максимальное количество постояльцев)</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Организуем дополнительные потоки доходов</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Приедем в Ваш город для осмотра объекта, где планируется открытие пансионата</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Организуем все работы по СанПИН (Роспотребнадзору) и пожарным требованиям</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Проведём обучение Вашего персонала</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Подготовим весь пакет внутренней документации и поможем открыть свой собственный пансионат</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Юридически правильно составим договор купли-продажи или договор аренды на объект недвижимости, в котором будет пансионат</li>
                  </ul>
                  <button onClick={() => setShowModal(true)} className="pricing-btn">Оставить заявку</button>
                </div>
                <div className="pricing-card premium">
                  <div className="pricing-badge">Хит</div>
                  <div className="pricing-name">Персональный</div>
                  <div className="pricing-price">2 300 000 <span className="pricing-currency">руб.</span></div>
                  <ul style={{textAlign:'left', margin:'20px 0', padding:'0', lineHeight:'2', fontSize:'17px', color:'#f5ede0', listStyle:'none', fontFamily:"'Cormorant Garamond', serif", fontWeight:700}}>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Сделаем подробный бизнес план</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Оценим финансовые вложения и прогнозируем прибыль</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Создадим логотип по вашему названию и поможем с регистрацией товарного знака</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Разработаем уникальное торговое предложение (что сделает Ваш пансионат особенным и привлекательным)</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Разработаем маркетинговую стратегию (чтобы получить максимальное количество постояльцев)</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Организуем дополнительные потоки доходов</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Приедем в Ваш город для осмотра объекта, где планируется открытие пансионата</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Организуем все работы по СанПИН (Роспотребнадзору) и пожарным требованиям</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Проведём обучение Вашего персонала</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Подготовим весь пакет внутренней документации и поможем открыть свой собственный пансионат</li>
                    <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Юридически правильно составим договор купли-продажи или договор аренды на объект недвижимости, в котором будет пансионат</li>
                  </ul>
                  <div style={{margin:'16px 0 8px', padding:'16px', background:'rgba(255,255,255,0.15)', borderRadius:'12px', border:'2px solid rgba(245,237,224,0.4)'}}>
                    <div style={{fontWeight:'700', fontSize:'15px', textTransform:'uppercase', letterSpacing:'2px', marginBottom:'10px', color:'#f5ede0', fontFamily:"'Cormorant Garamond', serif"}}>⭐ Только в этом тарифе</div>
                    <ul style={{textAlign:'left', padding:'0', lineHeight:'2', fontSize:'17px', margin:0, color:'#f5ede0', listStyle:'none', fontFamily:"'Cormorant Garamond', serif", fontWeight:700}}>
                      <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>12 месяцев личного сопровождения</li>
                      <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Персональный менеджер, который ответит на ваши вопросы</li>
                      <li style={{display:'flex', alignItems:'flex-start', gap:'8px'}}><span style={{marginTop:'4px', flexShrink:0}}>✦</span>Еженедельные онлайн видео-общения с руководителем</li>
                    </ul>
                  </div>
                  <button onClick={() => setShowModal(true)} className="pricing-btn">Оставить заявку</button>
                </div>
              </div>
            </div>
          </section>

          <section className="finmodel-section" id="finmodel">
            <style>{`
              .finmodel-section {
                padding: 100px 30px;
                background-color: #f5f0eb;
                background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
                background-size: cover;
                background-repeat: no-repeat;
                position: relative;
                overflow: hidden;
              }
              .finmodel-section::before {
                content: "";
                position: absolute;
                bottom: -100px; right: -100px;
                width: 500px; height: 500px;
                background: rgba(227,0,15,0.12);
                border-radius: 50%;
                filter: blur(100px);
                z-index: 0;
              }
              .finmodel-container {
                max-width: 1100px;
                margin: 0 auto;
                position: relative;
                z-index: 1;
              }
              .finmodel-label {
                font-family: "Montserrat", sans-serif;
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 3px;
                color: #e3000f;
                margin-bottom: 16px;
              }
              .finmodel-title {
                font-family: "Montserrat", sans-serif;
                font-weight: 700;
                font-size: clamp(32px, 5vw, 60px);
                color: #0a2d8f;
                line-height: 1.1;
                margin: 0 0 16px;
                text-transform: uppercase;
              }
              .finmodel-title span { color: #e3000f; }
              .finmodel-subtitle {
                font-family: "Montserrat", sans-serif;
                font-size: 17px;
                color: #555;
                margin: 0 0 60px;
                max-width: 700px;
                line-height: 1.7;
              }
              .finmodel-stats {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 24px;
                margin-bottom: 60px;
              }
              .finmodel-stat {
                background: #fff;
                border: 1px solid rgba(10,45,143,0.1);
                border-radius: 20px;
                padding: 32px 24px;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }
              .finmodel-stat:hover {
                transform: translateY(-6px);
                box-shadow: 0 16px 40px rgba(0,0,0,0.3);
              }
              .finmodel-stat-num {
                font-family: "Montserrat", sans-serif;
                font-weight: 700;
                font-size: clamp(32px, 4vw, 48px);
                color: #e3000f;
                line-height: 1;
                margin-bottom: 10px;
              }
              .finmodel-stat-desc {
                font-family: "Montserrat", sans-serif;
                font-size: 14px;
                color: #666;
                line-height: 1.5;
              }
              .finmodel-cards {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
              }
              .finmodel-card {
                background: #fff;
                border: 1px solid rgba(10,45,143,0.1);
                border-radius: 20px;
                padding: 36px 32px;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }
              .finmodel-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(10,45,143,0.1); }
              .finmodel-card-icon { font-size: 36px; margin-bottom: 14px; }
              .finmodel-card-title {
                font-family: "Montserrat", sans-serif;
                font-weight: 700;
                font-size: 18px;
                color: #0a2d8f;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 12px;
              }
              .finmodel-card-text {
                font-family: "Inter", sans-serif;
                font-size: 15px;
                color: #555;
                line-height: 1.8;
              }
              .finmodel-card-text strong { color: #1a1a2e; }
              .finmodel-trend {
                margin-top: 48px;
                background: rgba(10,45,143,0.06);
                border: 1px solid rgba(10,45,143,0.15);
                border-radius: 20px;
                padding: 32px 36px;
                display: flex;
                align-items: center;
                gap: 24px;
              }
              .finmodel-trend-icon { font-size: 48px; flex-shrink: 0; }
              .finmodel-trend-text {
                font-family: "Montserrat", sans-serif;
                font-size: 18px;
                font-weight: 600;
                color: #1a1a2e;
                line-height: 1.6;
              }
              .finmodel-trend-text span { color: #e3000f; }
              @media (max-width: 900px) {
                .finmodel-stats { grid-template-columns: repeat(2, 1fr); }
                .finmodel-cards { grid-template-columns: 1fr; }
              }
              @media (max-width: 560px) {
                .finmodel-section { padding: 60px 16px; }
                .finmodel-stats { grid-template-columns: 1fr 1fr; }
                .finmodel-trend { flex-direction: column; text-align: center; }
              }
            `}</style>
            <div className="finmodel-container">
              <div className="finmodel-label">Финансовая модель</div>
              <h2 className="finmodel-title">Рынок, который <span>растёт</span></h2>
              <p className="finmodel-subtitle">
                Россия входит в число стран с самым быстрым старением населения. Спрос на профессиональный уход за пожилыми людьми кратно превышает предложение — и этот разрыв будет только расти.
              </p>

              <div className="finmodel-stats">
                <div className="finmodel-stat">
                  <div className="finmodel-stat-num">38 млн</div>
                  <div className="finmodel-stat-desc">россиян старше 60 лет — каждый четвёртый житель страны</div>
                </div>
                <div className="finmodel-stat">
                  <div className="finmodel-stat-num">+12%</div>
                  <div className="finmodel-stat-desc">ежегодный рост числа людей старшего возраста по данным Росстата</div>
                </div>
                <div className="finmodel-stat">
                  <div className="finmodel-stat-num">от 150 тыс.</div>
                  <div className="finmodel-stat-desc">рублей в месяц — средний доход пансионата на 10–15 мест</div>
                </div>
                <div className="finmodel-stat">
                  <div className="finmodel-stat-num">12–18 мес.</div>
                  <div className="finmodel-stat-desc">средний срок окупаемости частного пансионата при грамотном запуске</div>
                </div>
              </div>

              <div className="finmodel-cards">
                <div className="finmodel-card">
                  <div className="finmodel-card-icon">📈</div>
                  <div className="finmodel-card-title">Дефицит мест</div>
                  <div className="finmodel-card-text">
                    По оценкам экспертов, государственные учреждения покрывают менее <strong>10% потребности</strong> в уходе за пожилыми. Частные пансионаты заполняются в течение <strong>1–2 недель</strong> после открытия.
                  </div>
                </div>
                <div className="finmodel-card">
                  <div className="finmodel-card-icon">💰</div>
                  <div className="finmodel-card-title">Стабильный доход</div>
                  <div className="finmodel-card-text">
                    Средний чек за проживание в частном пансионате — <strong>40 000–80 000 руб./мес.</strong> Пансионат на 15 мест приносит <strong>от 600 000 руб.</strong> выручки ежемесячно.
                  </div>
                </div>
                <div className="finmodel-card">
                  <div className="finmodel-card-icon">🏙️</div>
                  <div className="finmodel-card-title">Работает в любом городе</div>
                  <div className="finmodel-card-text">
                    Спрос есть как в мегаполисах, так и в городах с населением <strong>от 100 000 человек.</strong> Конкуренция минимальна — рынок только формируется.
                  </div>
                </div>
                <div className="finmodel-card">
                  <div className="finmodel-card-icon">🤝</div>
                  <div className="finmodel-card-title">Социальная значимость</div>
                  <div className="finmodel-card-text">
                    Государство поддерживает развитие частных домов ухода: <strong>налоговые льготы, субсидии</strong> и программы развития социального предпринимательства действуют во многих регионах.
                  </div>
                </div>
              </div>

              <div className="finmodel-trend">
                <div className="finmodel-trend-icon">🚀</div>
                <div className="finmodel-trend-text">
                  По прогнозам аналитиков, к 2030 году объём рынка частных домов ухода в России вырастет в <span>3–4 раза</span>. Те, кто зайдёт сейчас — займут лучшие позиции и сформируют лояльную клиентскую базу до прихода крупных игроков.
                </div>
              </div>

              <div style={{marginTop:'32px', padding:'20px 28px', background:'rgba(10,45,143,0.06)', borderRadius:'14px', borderLeft:'4px solid #0a2d8f', maxWidth:'860px', margin:'32px auto 0'}}>
                <p style={{fontFamily:"'Montserrat',sans-serif", fontSize:'13px', color:'#555', margin:0, lineHeight:1.7}}>
                  <strong style={{color:'#0a2d8f'}}>Источники данных:</strong> Федеральная служба государственной статистики (Росстат) — демографические показатели и динамика старения населения РФ; Министерство труда и социальной защиты РФ — данные о потребности в стационарном уходе; Агентство стратегических инициатив (АСИ) — оценки рынка социального предпринимательства; Фонд «Старость в радость» — данные о дефиците мест в учреждениях по уходу за пожилыми.
                </p>
              </div>

              <div style={{marginTop:'60px', background:'#fff', borderRadius:'24px', padding:'48px 40px', boxShadow:'0 8px 40px rgba(10,45,143,0.08)', maxWidth:'560px', margin:'60px auto 0'}}>
                <h3 style={{fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:'22px', color:'#0a2d8f', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'8px', marginTop:0}}>Хочу узнать больше</h3>
                <p style={{fontFamily:"'Inter',sans-serif", fontSize:'15px', color:'#666', marginBottom:'28px', marginTop:0}}>Оставьте заявку — мы расскажем, как работает финансовая модель именно в вашем городе</p>
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                  <div>
                    <label style={{display:'block', marginBottom:'6px', fontSize:'13px', fontWeight:600, color:'#555', textTransform:'uppercase', letterSpacing:'1px'}}>ФИО</label>
                    <input required value={formData.fio} onChange={e => setFormData({...formData, fio: e.target.value})} placeholder="Иванов Иван Иванович" style={{width:'100%', padding:'12px 16px', borderRadius:'10px', border:'1.5px solid #ddd', fontSize:'16px', outline:'none', boxSizing:'border-box', fontFamily:'inherit'}} />
                  </div>
                  <div>
                    <label style={{display:'block', marginBottom:'6px', fontSize:'13px', fontWeight:600, color:'#555', textTransform:'uppercase', letterSpacing:'1px'}}>Телефон</label>
                    <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+7 (___) ___-__-__" type="tel" style={{width:'100%', padding:'12px 16px', borderRadius:'10px', border:'1.5px solid #ddd', fontSize:'16px', outline:'none', boxSizing:'border-box', fontFamily:'inherit'}} />
                  </div>
                  <div>
                    <label style={{display:'block', marginBottom:'6px', fontSize:'13px', fontWeight:600, color:'#555', textTransform:'uppercase', letterSpacing:'1px'}}>E-mail</label>
                    <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="example@mail.ru" type="email" style={{width:'100%', padding:'12px 16px', borderRadius:'10px', border:'1.5px solid #ddd', fontSize:'16px', outline:'none', boxSizing:'border-box', fontFamily:'inherit'}} />
                  </div>
                  <button type="submit" style={{marginTop:'8px', padding:'16px', background:'#0a2d8f', color:'#fff', border:'none', borderRadius:'12px', fontSize:'17px', fontWeight:700, cursor:'pointer', fontFamily:"'Montserrat',sans-serif", letterSpacing:'1px'}}>Отправить заявку</button>
                </form>
              </div>
            </div>
          </section>

        </main>
      </div>

      {showModal && (
        <div onClick={() => setShowModal(false)} style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
          <div onClick={e => e.stopPropagation()} style={{background:'#fff', borderRadius:'20px', padding:'40px', maxWidth:'460px', width:'100%', boxShadow:'0 20px 60px rgba(0,0,0,0.3)'}}>
            {submitted ? (
              <div style={{textAlign:'center', padding:'20px 0'}}>
                <div style={{fontSize:'48px', marginBottom:'16px'}}>✅</div>
                <div style={{fontFamily:"'Cormorant Garamond', serif", fontSize:'24px', fontWeight:700, color:'#1a5c2e'}}>Заявка отправлена!</div>
                <div style={{marginTop:'8px', color:'#666', fontSize:'15px'}}>Мы свяжемся с вами в ближайшее время</div>
              </div>
            ) : (
              <>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'28px'}}>
                  <h3 style={{fontFamily:"'Cormorant Garamond', serif", fontSize:'28px', fontWeight:700, color:'#0a2d8f', margin:0}}>Оставить заявку</h3>
                  <button onClick={() => setShowModal(false)} style={{background:'none', border:'none', fontSize:'24px', cursor:'pointer', color:'#999', lineHeight:1}}>×</button>
                </div>
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                  <div>
                    <label style={{display:'block', marginBottom:'6px', fontSize:'13px', fontWeight:600, color:'#555', textTransform:'uppercase', letterSpacing:'1px'}}>ФИО</label>
                    <input required value={formData.fio} onChange={e => setFormData({...formData, fio: e.target.value})} placeholder="Иванов Иван Иванович" style={{width:'100%', padding:'12px 16px', borderRadius:'10px', border:'1.5px solid #ddd', fontSize:'16px', outline:'none', boxSizing:'border-box', fontFamily:'inherit'}} />
                  </div>
                  <div>
                    <label style={{display:'block', marginBottom:'6px', fontSize:'13px', fontWeight:600, color:'#555', textTransform:'uppercase', letterSpacing:'1px'}}>Телефон</label>
                    <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+7 (___) ___-__-__" type="tel" style={{width:'100%', padding:'12px 16px', borderRadius:'10px', border:'1.5px solid #ddd', fontSize:'16px', outline:'none', boxSizing:'border-box', fontFamily:'inherit'}} />
                  </div>
                  <div>
                    <label style={{display:'block', marginBottom:'6px', fontSize:'13px', fontWeight:600, color:'#555', textTransform:'uppercase', letterSpacing:'1px'}}>E-mail</label>
                    <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="example@mail.ru" type="email" style={{width:'100%', padding:'12px 16px', borderRadius:'10px', border:'1.5px solid #ddd', fontSize:'16px', outline:'none', boxSizing:'border-box', fontFamily:'inherit'}} />
                  </div>
                  <button type="submit" style={{marginTop:'8px', padding:'16px', background:'#0a2d8f', color:'#fff', border:'none', borderRadius:'12px', fontSize:'17px', fontWeight:700, cursor:'pointer', fontFamily:"'Cormorant Garamond', serif", letterSpacing:'1px'}}>Отправить</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default PhotographyBanner