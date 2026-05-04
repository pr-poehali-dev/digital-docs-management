import type React from "react"
import { useState } from "react"
import LeadModal from "./banner/LeadModal"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ fio: '', phone: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('https://functions.poehali.dev/cd4414de-0e80-429f-ad12-caeca9849eb1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Шапка сайта' })
      })
    } catch (err) { console.error(err) }
    setSubmitted(true)
    setTimeout(() => {
      setShowModal(false)
      setSubmitted(false)
      setFormData({ fio: '', phone: '', email: '' })
    }, 2500)
  }

  const links = [
    { label: "Главная", href: "#home" },
    { label: "О нас", href: "#founder" },
    { label: "Этапы запуска", href: "#steps" },
    { label: "Финансовая модель", href: "#finmodel" },
    { label: "Тарифы", href: "#pricing" },
  ]

  return (
    <>
      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(245,240,235,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(10,45,143,0.08);
        }
        .header-inner {
          width: 100%;
          padding: 0 30px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 32px;
        }
        .header-logo {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: #0a2d8f;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.2;
          transition: transform 0.3s ease;
        }
        .header-logo:hover {
          transform: translateY(-2px);
        }
        .header-logo svg {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border-radius: 10px;
        }
        .header-logo:hover svg {
          transform: rotate(-6deg) scale(1.1);
        }
        .header-logo span {
          color: #e3000f;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .header-nav a {
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .header-nav a:hover {
          color: #0a2d8f;
          transform: translateY(-2px);
        }
        .header-cta {
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #fff !important;
          background: #e3000f;
          padding: 10px 22px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease !important;
          white-space: nowrap;
        }
        .header-cta:hover {
          background: #b80000 !important;
          color: #fff !important;
          transform: translateY(-1px);
        }
        .header-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
          position: relative;
          z-index: 1100;
        }
        .header-burger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #0a2d8f;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          background: rgba(245,240,235,0.98);
          padding: 16px 30px 24px;
          border-top: 1px solid rgba(10,45,143,0.08);
          position: relative;
          z-index: 1050;
        }
        .mobile-menu.open {
          display: flex;
        }
        .mobile-menu a {
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(10,45,143,0.06);
          transition: color 0.2s;
        }
        .mobile-menu a:hover { color: #0a2d8f; }
        .mobile-menu a:last-child { border-bottom: none; }
        @media (max-width: 768px) {
          .header-nav { display: none; }
          .header-burger { display: flex; }
          .header-inner { padding: 0 16px; }
        }
      `}</style>
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="header-logo" style={{display:'flex', alignItems:'center', gap:'10px', textDecoration:'none', marginRight:'auto'}}>
            <img src="https://cdn.poehali.dev/projects/68a6caea-ef68-4431-8bf3-bf4c974f1d77/bucket/6d165c1d-89d5-4c91-94ee-3c3013c5ea5a.jpg" alt="Логотип" width="38" height="38" style={{objectFit:'contain', borderRadius:'8px'}} />
            <span style={{display:'flex', flexDirection:'column', gap:'2px', alignItems:'center'}}>
              <span style={{fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:'13px', color:'#0a2d8f', textTransform:'uppercase', letterSpacing:'2px', lineHeight:1}}>Академия</span>
              <span style={{fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:'18px', color:'#e3000f', textTransform:'uppercase', letterSpacing:'1px', lineHeight:1}}>«Как открыть пансионат»</span>
            </span>
          </a>
          <nav className="header-nav">
            {links.map(l => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
            <button onClick={() => setShowModal(true)} className="header-cta" style={{cursor:'pointer', border:'none'}}>Оставить заявку</button>
          </nav>
          <button className="header-burger" onClick={() => setMenuOpen(v => !v)} aria-label="Меню">
            <span style={menuOpen ? {transform:'rotate(45deg) translate(5px,5px)'} : {}}></span>
            <span style={menuOpen ? {opacity:0} : {}}></span>
            <span style={menuOpen ? {transform:'rotate(-45deg) translate(5px,-5px)'} : {}}></span>
          </button>
        </div>
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <button onClick={() => { setMenuOpen(false); setShowModal(true) }} style={{fontFamily:"'Montserrat',sans-serif", fontSize:'14px', fontWeight:700, color:'#0a2d8f', textTransform:'uppercase', letterSpacing:'1px', padding:'12px 0', border:'none', background:'none', cursor:'pointer', textAlign:'left'}}>Оставить заявку</button>
        </div>
      </header>
      <div style={{height: '68px'}} />

      {showModal && (
        <LeadModal
          formData={formData}
          submitted={submitted}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
          onChangeFormData={setFormData}
        />
      )}
    </>
  )
}

export default Header