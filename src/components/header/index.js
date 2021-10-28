import React from 'react'
import './header.css'
import Logo from '../../assets/images/logo.png'

export default function Header() {
    return (
      <div className="container container-header">
        <div className="logo">
          <img src={Logo} alt="logoSenai" />
        </div>
        <div className="titulo-header">
          <h1>SÃO PAULO - SANTO AMARO</h1>
          <h2>SUÍÇO-BRASILEIRO PAULO ERNESTO TOLLE</h2>
        </div>
      </div>
    );
}
