import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react"

const data = {
  facebookLink: "https://facebook.com/",
  instaLink: "https://instagram.com/",
  youtubeLink: "https://youtube.com/",
  services: {
    program: "#",
    format: "#",
    mentors: "#",
    cases: "#",
  },
  about: {
    story: "#",
    faq: "#",
    blog: "#",
    reviews: "#",
  },
  help: {
    faqs: "#",
    support: "#",
    blog: "#",
  },
  contact: {
    email: "info@pansionat-academy.ru",
    phone: "+7 (800) 000-00-00",
    address: "Москва, Россия",
  },
  company: {
    name: "Академия пансионата",
    description:
      "Практическое обучение для тех, кто хочет открыть прибыльный пансионат для пожилых. От идеи до первых клиентов — с наставником.",
  },
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Youtube, label: "YouTube", href: data.youtubeLink },
]

const aboutLinks = [
  { text: "О нас", href: data.about.story },
  { text: "FAQ", href: data.about.faq },
  { text: "Блог", href: data.about.blog },
  { text: "Отзывы", href: data.about.reviews },
]

const serviceLinks = [
  { text: "Программа курса", href: data.services.program },
  { text: "Формат обучения", href: data.services.format },
  { text: "Наставники", href: data.services.mentors },
  { text: "Кейсы выпускников", href: data.services.cases },
]

const helpfulLinks = [
  { text: "FAQ", href: data.help.faqs },
  { text: "Поддержка", href: data.help.support },
  { text: "Блог", href: data.help.blog, hasIndicator: true },
]

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .ai-footer {
          background-color: #f5f0eb;
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
        }

        .ai-footer::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #e3000f;
          filter: blur(140px);
          height: 60%;
          width: 50%;
          position: absolute;
          top: 20%;
          left: -25%;
          z-index: 0;
        }

        .ai-footer::after {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.2;
          background: #cb4b16;
          filter: blur(120px);
          height: 40%;
          width: 40%;
          position: absolute;
          bottom: 10%;
          right: -20%;
          z-index: 0;
        }

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 30px 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .brand-icon {
          width: 50px;
          height: 50px;
          background: #e3000f;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #002b36;
        }

        .brand-name {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 28px;
          color: #0a2d8f;
          text-transform: uppercase;
        }

        .brand-description {
          font-family: "Montserrat";
          font-size: 16px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 40px;
          max-width: 400px;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: rgba(227,0,15,0.1);
          border: 1px solid rgba(10,45,143,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e3000f;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #e3000f;
          color: #002b36;
          transform: translateY(-2px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .link-column h3 {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #e3000f;
          text-transform: uppercase;
          margin: 0 0 25px;
          letter-spacing: 1px;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-item {
          margin-bottom: 15px;
        }

        .link-item a {
          font-family: "Montserrat";
          font-size: 14px;
          color: #555;
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .link-item a:hover {
          color: #0a2d8f;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          color: #e3000f;
          flex-shrink: 0;
        }

        .live-indicator {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-dot {
          position: relative;
          width: 8px;
          height: 8px;
        }

        .pulse-dot::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #e3000f;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .pulse-dot::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #e3000f;
          border-radius: 50%;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(227,0,15, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(227,0,15, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(227,0,15, 0);
          }
        }

        .footer-bottom {
          border-top: 1px solid rgba(10,45,143,0.12);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          font-family: "Montserrat";
          font-size: 14px;
          color: #888;
        }

        .copyright a {
          color: #e3000f;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .copyright a:hover {
          color: #0a2d8f;
        }

        .footer-legal {
          display: flex;
          gap: 30px;
        }

        .footer-legal a {
          font-family: "Montserrat";
          font-size: 14px;
          color: #888;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal a:hover {
          color: #0a2d8f;
        }

        @media screen and (max-width: 1199px) {
          .footer-container {
            padding: 60px 20px 20px;
          }

          .footer-grid {
            gap: 60px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media screen and (max-width: 767px) {
          .footer-container {
            padding: 40px 16px 16px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .brand-name {
            font-size: 24px;
          }

          .brand-description {
            font-size: 14px;
          }

          .social-links {
            gap: 15px;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .footer-legal {
            gap: 20px;
          }
        }
      `}</style>

      <footer className="ai-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-logo">
                <svg width="44" height="44" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="38" height="38" rx="10" fill="#0a2d8f"/>
                  <path d="M19 7L10 13V31H16V22H22V31H28V13L19 7Z" fill="white"/>
                </svg>
                <span style={{display:'flex', flexDirection:'column', lineHeight:1.1}}>
                  <span style={{fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:'15px', color:'#0a2d8f', textTransform:'uppercase', letterSpacing:'1px'}}>Академия</span>
                  <span style={{fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:'15px', color:'#e3000f', textTransform:'uppercase', letterSpacing:'1px'}}>«Как открыть пансионат»</span>
                </span>
              </div>
              <p className="brand-description">{data.company.description}</p>

            </div>

            <div className="footer-links">
              <div className="link-column">
                <h3>Главная</h3>
                <ul className="link-list">
                  {aboutLinks.map(({ text, href }) => (
                    <li key={text} className="link-item">
                      <a href={href}>{text}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-column">
                <h3>Контакты</h3>
                <ul className="link-list">
                  {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                    <li key={text} className="link-item">
                      <a href="#" className="contact-item">
                        <Icon className="contact-icon" size={20} />
                        {isAddress ? <address style={{ fontStyle: "normal" }}>{text}</address> : <span>{text}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {new Date().getFullYear()} Академия «Как открыть пансионат». Все права защищены.
            </p>
            <div className="footer-legal">
              <a href="/privacy">Политика конфиденциальности</a>
              <a href="/terms">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}