import type React from "react"

const BannerStyles: React.FC = () => (
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
      from { transform: translateY(-515px); }
      to { transform: translateY(0); }
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

    .book-link:hover .arrow::before { width: 65%; }
    .book-link:hover .arrow::after { height: 65%; }

    .book-link .arrow span {
      background-color: #e3000f;
      height: 2px;
      width: 100%;
      display: inline-block;
      transform: rotate(-45deg) translate(-3px, -1px);
      transform-origin: right top;
      border-radius: 30px;
      position: absolute;
      top: 0;
      left: 0;
      transition: all ease-in-out 0.35s;
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
      top: 0; left: 0;
      width: 100%; height: 100%;
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

    .particle:nth-child(odd) { background: rgba(203, 75, 22, 0.4); }
    .particle:nth-child(3n) { background: rgba(255, 255, 255, 0.2); }

    @keyframes float {
      0% { transform: translateX(-100px) translateY(0px) rotate(0deg); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg); opacity: 0; }
    }

    .bg-line {
      position: absolute;
      top: 0; right: 0;
      width: 50%;
      height: 85px;
      z-index: -1;
      overflow: hidden;
      display: flex;
      white-space: nowrap;
    }

    .bg-line img {
      position: relative;
      flex-shrink: 0;
      animation: 26s linear infinite;
    }

    .bg-line img:nth-child(1) { animation-name: first-text; }
    .bg-line img:nth-child(2) { animation-name: second-text; }

    @keyframes first-text {
      50% { transform: translateX(-100%); opacity: 1; }
      50.05% { opacity: 0; }
      50.1% { transform: translateX(100%); opacity: 1; }
      100% { transform: translateX(0%); }
    }

    @keyframes second-text {
      0% { transform: translateX(0%); }
      50% { transform: translateX(-100%); }
      100% { transform: translateX(-200%); }
    }

    .bg-dash-circle {
      position: absolute;
      bottom: -35px; right: -13px;
      z-index: -1;
      width: 180px;
      aspect-ratio: 1/1;
    }

    .bg-dash-circle img {
      height: 100%; width: 100%;
      object-fit: cover;
      object-position: center center;
      animation: circle-rotate 18s linear infinite;
    }

    @keyframes circle-rotate {
      0% { transform: rotate(0); }
      100% { transform: rotate(360deg); }
    }

    .hero-image {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 80%; height: auto;
      z-index: 2;
      border-radius: 12px;
      opacity: 0.9;
    }

    @media screen and (min-width: 1500px) { .info-section { padding-left: 120px; } }
    @media screen and (min-width: 1400px) { .info-section { padding-left: 100px; } }

    @media screen and (max-width: 1199px) {
      .bg-line { height: 68px; }
      .right-part { height: 400px; width: 400px; }
      .right-part .d-flex { gap: 20px; }
      .bg-dash-circle { width: 130px; }
    }

    @media screen and (max-width: 767px) {
      .photography-banner { overflow-x: hidden; }
      .info-section { display: block; padding: 0; overflow: visible; min-height: auto; height: auto; }
      .bg-line { height: 52px; }
      .left-part { padding: 40px 16px 60px; overflow: visible; }
      .right-part { height: 334px; width: 334px; margin: 0 auto; margin-right: auto; }
      .left-part h1 .text { height: 88px; }
      .left-part p { font-size: 12px; width: 96%; }
      .bg-dash-circle { width: 80px; }
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
      height: 40%; width: 40%;
      position: absolute;
      top: 20%; right: -20%;
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

    .features-content h2 .highlight { color: #e3000f; }

    .features-list { list-style: none; padding: 0; margin: 0; }

    .feature-item {
      padding: 25px 0;
      border-bottom: 1px solid #333;
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .feature-icon {
      width: 50px; height: 50px;
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

    .feature-text h3 { color: #fff; font-family: "Montserrat"; font-size: 18px; margin: 0 0 8px; text-transform: uppercase; }
    .feature-text p { color: #aaa; font-family: "Inter", sans-serif; font-size: 14px; margin: 0; line-height: 1.6; }

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
      height: 50%; width: 30%;
      position: absolute;
      top: 50%; left: -15%;
      transform: translateY(-50%);
      z-index: -1;
    }

    .testimonials-container { max-width: 1200px; margin: 0 auto; text-align: center; }

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

    .testimonials-marquee:hover { animation-play-state: paused; }

    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .testimonial-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid #333;
      border-radius: 20px;
      padding: 40px 30px;
      backdrop-filter: blur(10px);
      width: 400px;
      flex-shrink: 0;
    }

    .testimonial-quote { color: #fff; font-family: "Inter",sans-serif; font-weight: 400; font-size: 16px; line-height: 1.8; margin: 0 0 30px; font-style: italic; }
    .testimonial-author { display: flex; font-family: "Inter",sans-serif; align-items: center; gap: 15px; }
    .author-avatar { width: 50px; height: 50px; border-radius: 50%; background: #e3000f; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #002b36; }
    .author-info h4 { color: #cb4b16; font-family: "Inter",sans-serif; font-size: 14px; margin: 0; text-transform: uppercase; }
    .author-info p { color: #aaa; font-family: "Inter",sans-serif; font-size: 12px; margin: 5px 0 0; }

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
      height: 60%; width: 80%;
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }

    .cta-container { max-width: 800px; margin: 0 auto; }
    .cta-title { color: #fff; font-family: "Montserrat",sans-serif; font-weight: 700; font-size: clamp(80px,12vw,160px); line-height: 0.8; margin: 0 0 30px; text-transform: uppercase; }
    .cta-subtitle { color: #e3000f; font-family: "Montserrat"; font-size: 26px; line-height: 1.6; margin: 0 auto 50px; max-width: 600px; }
    .cta-buttons { display: flex; gap: 30px; justify-content: center; flex-wrap: wrap; }
    .cta-button { padding: 18px 40px; background: #e3000f; color: #002b36; text-decoration: none; font-family: "Montserrat"; font-size: 16px; font-weight: bold; text-transform: uppercase; border-radius: 50px; transition: all 0.3s ease; border: 2px solid #e3000f; }
    .cta-button:hover { background: transparent; color: #e3000f; }
    .cta-button.secondary { background: transparent; color: #fff; border: 2px solid #fff; }
    .cta-button.secondary:hover { background: transparent; color: #e3000f; border: 2px solid #e3000f; }

    @media screen and (max-width: 1199px) {
      .features-section, .testimonials-section, .cta-section { padding: 80px 20px; }
      .features-container { gap: 40px; }
      .testimonials-marquee { gap: 30px; }
      .cta-buttons { gap: 20px; }
    }

    @media screen and (max-width: 767px) {
      .features-section, .testimonials-section, .cta-section { padding: 60px 16px; }
      .features-container { grid-template-columns: 1fr; gap: 30px; }
      .testimonials-marquee { gap: 25px; }
      .testimonial-card { padding: 30px 20px; }
      .cta-buttons { flex-direction: column; align-items: center; gap: 15px; }
      .cta-button { width: 100%; max-width: 300px; }
    }
  `}</style>
)

export default BannerStyles
