import React from 'react'
import { Link } from 'react-router-dom'

export default function MonumentCard({ m }){
  return (
    <div className="card">
      <div className="row" style={{justifyContent:'space-between'}}>
        <h3 style={{margin:0}}>{m.name}</h3>
        <span className="tag">{m.type}</span>
      </div>
      <p className="muted small" style={{marginTop:6}}>{m.city}, {m.state} • {m.period}</p>
      <div style={{borderRadius:14, overflow:'hidden', border:'1px solid rgba(255,255,255,0.10)', margin:'10px 0'}}>
        <div style={{ position: 'relative', width: '100%', height: 170, overflow: 'hidden', borderRadius: 10 }}>
  
  {/* Blurred background */}
  <img
    src={m.cover}
    alt=""
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'blur(10px)',
      transform: 'scale(1.1)',
      opacity: 0.5
    }}
  />

  {/* Main image */}
  <img
    src={m.cover}
    alt={m.name}
    style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }}
  />

</div>
      </div>
      <p className="small">{m.short}</p>
      <div className="row">
        <Link className="btnGhost" to={`/monument/${m.id}`}>Read more</Link>
        <Link className="btn" to={`/tours?site=${m.id}`}>Start tour</Link>
      </div>
    </div>
  )
}
