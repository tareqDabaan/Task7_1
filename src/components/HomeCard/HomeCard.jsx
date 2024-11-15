import React from 'react'
import './HomeCard.css'
export default function HomeCard({icon, title, description}) {
  return (
    <div className='home-card'>
        <div className="home-icon">{icon}</div>
        <h3 className='home-title'>{title}</h3>
        <p className='home-desc'>{description}</p>
        <button className='home-card-button'>
            Read more 
            <span className="home-card-arrow">»</span>
        </button>
    </div>
  )
}
