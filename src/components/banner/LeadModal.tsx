import type React from "react"

interface FormData {
  fio: string
  phone: string
  email: string
}

interface LeadModalProps {
  formData: FormData
  submitted: boolean
  onClose: () => void
  onSubmit: (e: React.FormEvent) => void
  onChangeFormData: (data: FormData) => void
}

const LeadModal: React.FC<LeadModalProps> = ({ formData, submitted, onClose, onSubmit, onChangeFormData }) => {
  return (
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
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
              <button onClick={onClose} style={{background:'none', border:'none', fontSize:'24px', cursor:'pointer', color:'#999', lineHeight:1}}>×</button>
            </div>
            <form onSubmit={onSubmit} style={{display:'flex', flexDirection:'column', gap:'16px'}}>
              <div>
                <label style={{display:'block', marginBottom:'6px', fontSize:'13px', fontWeight:600, color:'#555', textTransform:'uppercase', letterSpacing:'1px'}}>ФИО</label>
                <input required value={formData.fio} onChange={e => onChangeFormData({...formData, fio: e.target.value})} placeholder="Иванов Иван Иванович" style={{width:'100%', padding:'12px 16px', borderRadius:'10px', border:'1.5px solid #ddd', fontSize:'16px', outline:'none', boxSizing:'border-box', fontFamily:'inherit'}} />
              </div>
              <div>
                <label style={{display:'block', marginBottom:'6px', fontSize:'13px', fontWeight:600, color:'#555', textTransform:'uppercase', letterSpacing:'1px'}}>Телефон</label>
                <input required value={formData.phone} onChange={e => onChangeFormData({...formData, phone: e.target.value})} placeholder="+7 (___) ___-__-__" type="tel" style={{width:'100%', padding:'12px 16px', borderRadius:'10px', border:'1.5px solid #ddd', fontSize:'16px', outline:'none', boxSizing:'border-box', fontFamily:'inherit'}} />
              </div>
              <div>
                <label style={{display:'block', marginBottom:'6px', fontSize:'13px', fontWeight:600, color:'#555', textTransform:'uppercase', letterSpacing:'1px'}}>E-mail</label>
                <input required value={formData.email} onChange={e => onChangeFormData({...formData, email: e.target.value})} placeholder="example@mail.ru" type="email" style={{width:'100%', padding:'12px 16px', borderRadius:'10px', border:'1.5px solid #ddd', fontSize:'16px', outline:'none', boxSizing:'border-box', fontFamily:'inherit'}} />
              </div>
              <label style={{display:'flex', alignItems:'flex-start', gap:'10px', cursor:'pointer'}}>
                <input required type="checkbox" style={{marginTop:'3px', width:'16px', height:'16px', flexShrink:0, accentColor:'#0a2d8f', cursor:'pointer'}} />
                <span style={{fontSize:'12px', color:'#777', lineHeight:'1.5'}}>
                  Даю добровольное согласие на обработку персональных данных в соответствии с ФЗ № 152 и политикой конфиденциальности
                </span>
              </label>
              <button type="submit" style={{marginTop:'8px', padding:'16px', background:'#0a2d8f', color:'#fff', border:'none', borderRadius:'12px', fontSize:'17px', fontWeight:700, cursor:'pointer', fontFamily:"'Cormorant Garamond', serif", letterSpacing:'1px'}}>Отправить</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default LeadModal