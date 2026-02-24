import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Home(){
  const navigate = useNavigate();

  return (
    <div
      className="grid"
      style={{
        gap:16,
        position:'relative',
        minHeight:'100vh',
        overflow:'hidden'
      }}
    >
      {/* Page background */}
      <img
        src="/images/ruins.jpg"
        alt=""
        style={{
          position:'fixed',
          top:0,
          left:0,
          width:'100%',
          height:'100%',
          objectFit:'cover',
          filter:'blur(6px)',
          opacity:0.25,
          zIndex:-1
        }}
      />

      {/* Vintage overlay */}
      <div
        style={{
          position:'fixed',
          top:0,
          left:0,
          width:'100%',
          height:'100%',
          background:'rgba(243,233,220,0.7)',
          zIndex:-1
        }}
      />
      <div className="hero" style={{padding:'30px 20px'}}>
        <h1 className="heroTitle">Learn Indian culture & explore monuments—like a guided museum tour.</h1>
        <p className="muted" style={{maxWidth:800, marginTop:0}}>
          Discover famous historical places, take interactive virtual tours, and join cultural discussions.
          Role-based features support Admin, Cultural Enthusiast, Content Creator, and Tour Guide workflows.
        </p>
        <div className="row" style={{gap:12, marginTop:10}}>
         
        </div>
      </div>

      <div className="grid grid3">
        <div
          className="card"
          style={{cursor:'pointer', transition:'transform 0.2s ease'}}
          onClick={()=>navigate("/explore")}
          onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-5px)'}
          onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}
        >
          <h3> Explore</h3>
          <p className="muted small">Browse monuments with filters by state, type, and period.</p>
          <Link className="btn" to="/explore">Explore monuments</Link>
        </div>
        <div
          className="card"
          style={{cursor:'pointer', transition:'transform 0.2s ease'}}
          onClick={()=>navigate("/tours")}
          onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-5px)'}
          onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}
        >
          <h3> Virtual Tours</h3>
          <p className="muted small">Interactive steps, hotspots, and guide-style narration.</p>
          <Link className="btn" to="/tours">Try a virtual tour</Link>
        </div>
        <div
          className="card"
          style={{cursor:'pointer', transition:'transform 0.2s ease'}}
          onClick={()=>navigate("/discussions")}
          onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-5px)'}
          onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}
        >
          <h3> Discussions</h3>
          <p className="muted small">Ask questions and share insights (guides can reply).</p>
          <Link className="btn" to="/discussions">Join discussions</Link>
        </div>
      </div>
    </div>
  )
}
