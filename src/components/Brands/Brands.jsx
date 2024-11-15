import React from 'react'
import { Container } from 'react-bootstrap'
import "./Brands.css"
import envato from "../../images/envato.webp"
export default function Brands() {
  return (
    <div>
      
      <Container className="brands">
        <div className="brands-title">
          <h5>1K + Brands Trust Us</h5>
        </div>
        <div className="envato">
            <img src={envato} alt="" />
            <img src={envato} alt="" />
            <img src={envato} alt="" />
            <img src={envato} alt="" />
            <img src={envato} alt="" />
        </div>
      </Container>

    </div>
  )
}
