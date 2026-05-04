export default function Footer() {
  return (
    <>
      <style>{`
        .ai-footer {
          background-color: #f5f0eb;
          position: relative;
          overflow: hidden;
        }

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 30px 30px 20px;
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(10,45,143,0.12);
          margin-bottom: 20px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .brand-logo:hover {
          transform: translateY(-2px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright {
          font-family: "Montserrat";
          font-size: 14px;
          color: #888;
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

        @media screen and (max-width: 767px) {
          .footer-container {
            padding: 24px 16px 16px;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }

          .footer-legal {
            gap: 16px;
          }
        }
      `}</style>

      <footer className="ai-footer">
        <div className="footer-container">
          <div className="footer-inner">
            <div className="brand-logo">
              <img src="https://cdn.poehali.dev/projects/68a6caea-ef68-4431-8bf3-bf4c974f1d77/bucket/6d165c1d-89d5-4c91-94ee-3c3013c5ea5a.jpg" alt="Логотип" width="44" height="44" style={{objectFit:'contain', borderRadius:'8px'}} />
              <span style={{display:'flex', flexDirection:'column', lineHeight:1.1}}>
                <span style={{fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:'15px', color:'#0a2d8f', textTransform:'uppercase', letterSpacing:'1px'}}>Академия</span>
                <span style={{fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:'15px', color:'#e3000f', textTransform:'uppercase', letterSpacing:'1px'}}>«Как открыть пансионат»</span>
              </span>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © 2026 Академия «Как открыть пансионат». Все права защищены.
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
