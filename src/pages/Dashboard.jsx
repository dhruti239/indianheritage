import React from 'react'
import { Link } from 'react-router-dom'
import { getCurrentUser, roleLabel } from '../lib/auth.js'

export default function Dashboard(){
  const user = getCurrentUser()

  if(!user){
    return (
      <div className="card">
        <h2>You are not logged in</h2>
        <Link className="btn" to="/login">Login</Link>
      </div>
    )
  }

  return (
    <div className="grid" style={{gap:16}}>
      <div
        className="card"
        style={{
          position: 'relative',
          background:'#f3e9dc',
          border:'1px solid var(--border)',
          overflow:'hidden',
          minHeight:120
        }}
      >
        {/* Light temple background */}
        <img
          src="/images/konark.jpg"
          alt=""
          style={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
            objectFit:'cover',
            opacity:0.15
          }}
        />

        <div className="row" style={{justifyContent:'space-between', position:'relative', zIndex:1}}>
          <div>
            <h2 style={{margin:'0 0 6px 0'}}>Dashboard</h2>
            <p className="muted small" style={{margin:0}}>
              Welcome, <b>{user.name || user.email}</b> • Role: <b>{roleLabel(user.role)}</b>
            </p>
          </div>
          <Link className="btnGhost" to="/explore">Explore</Link>
        </div>
      </div>

      {user.role === "admin" && <AdminPanel />}
      {user.role === "creator" && <CreatorPanel />}
      {user.role === "guide" && <GuidePanel />}
      {user.role === "enthusiast" && <EnthusiastPanel />}

      
    </div>
  )
}

function AdminPanel(){
  return (
    <div className="card" style={{background:'#f3e9dc', border:'1px solid var(--border)'}}>
      <h3 style={{marginTop:0}}> Admin</h3>
      <p className="muted small" style={{marginTop:0}}>
        Manage content and user interactions; ensure information accuracy.
      </p>
      <div className="grid grid3">
        <Card title="Content approvals" text="Approve or reject new monument/culture content (demo placeholder)." />
        <Card title="Moderate discussions" text="Hide spam, manage reports, verify guide answers." />
        <Card title="Accuracy checklist" text="Add citations/sources and verify facts before publishing." />
      </div>
      <div className="row" style={{marginTop:10}}>
        <Link className="btnGhost" to="/discussions">Open discussions</Link>
        <Link className="btn" to="/explore">Manage monuments (demo)</Link>
      </div>
    </div>
  )
}

function CreatorPanel(){
  return (
    <div className="card" style={{background:'#f3e9dc', border:'1px solid var(--border)'}}>
      <h3 style={{marginTop:0}}> Content Creator</h3>
      <p className="muted small" style={{marginTop:0}}>
        Develop and update educational content; create interactive features and manage tours.
      </p>
      <div className="grid grid3">
        <Card title="Add monument content" text="Create new entries with images, history, and facts." />
        <Card title="Create tour steps" text="Define step-by-step hotspots and narration." />
        <Card title="Culture articles" text="Write festivals/dance/food pages with multimedia." />
      </div>
      <div className="row" style={{marginTop:10}}>
        <Link className="btn" to="/tours">Edit tours (demo)</Link>
        <Link className="btnGhost" to="/culture">Update culture</Link>
      </div>
    </div>
  )
}

function GuidePanel(){
  return (
    <div className="card" style={{background:'#f3e9dc', border:'1px solid var(--border)'}}>
      <h3 style={{marginTop:0}}> Tour Guide</h3>
      <p className="muted small" style={{marginTop:0}}>
        Provide insights during tours and answer user questions.
      </p>
      <div className="grid grid3">
        <Card title="Live Q&A" text="Reply to discussions with verified guide tag." />
        <Card title="Tour narration" text="Add notes/narration inside virtual tour steps." />
        <Card title="Visitor tips" text="Share best time, etiquette, and do’s/don’ts." />
      </div>
      <div className="row" style={{marginTop:10}}>
        <Link className="btn" to="/tours">Open virtual tours</Link>
        <Link className="btnGhost" to="/discussions">Answer queries</Link>
      </div>
    </div>
  )
}

function EnthusiastPanel(){
  return (
    <div className="card" style={{background:'#f3e9dc', border:'1px solid var(--border)'}}>
      <h3 style={{marginTop:0}}> Cultural Enthusiast</h3>
      <p className="muted small" style={{marginTop:0}}>
        Explore content, join virtual tours, and engage in cultural discussions.
      </p>
      <div className="grid grid3">
        <Card title="Explore monuments" text="Filter by state/type and read detailed pages." />
        <Card title="Take tours" text="Follow interactive steps with images and narration." />
        <Card title="Join discussions" text="Ask questions and learn from guides." />
      </div>
      <div className="row" style={{marginTop:10}}>
        <Link className="btn" to="/explore">Explore</Link>
        <Link className="btnGhost" to="/discussions">Discuss</Link>
      </div>
    </div>
  )
}

function Card({title, text}){
  return (
    <div
      className="card"
      style={{
        background:'#f3e9dc',
        border:'1px solid var(--border)',
        transition:'transform 0.2s ease, box-shadow 0.2s ease',
        cursor:'pointer'
      }}
      onMouseEnter={(e)=>{
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(62,47,28,0.15)'
      }}
      onMouseLeave={(e)=>{
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <h3 style={{marginTop:0, color:'#3e2f1c'}}>{title}</h3>
      <p className="small" style={{marginTop:0, lineHeight:1.6, color:'#6b5a3a'}}>
        {text}
      </p>
    </div>
  )
}
