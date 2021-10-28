import React from 'react'
import './card.css'

export default function Card(props) {

    const titulo = props.titulo
    const image = props.image
    const desc = props.desc
    const tempo = props.tempo
    const preco = props.preco
    
    return (
      <div className="container container-card">
        <div className="titulo titulo-card">
          <h3>{titulo}</h3>
        </div>
        <div className="image image-card">
          <img src={image} alt="imgCurso" />
        </div>
        <div className="info info-card">
          <div className="classP desc desc-card">
            <p>{desc}</p>
          </div>
          <div className="classP tempo tempo-card">
            <p>Duração: {tempo} horas</p>
          </div>
          <div className="classP preco preco-card">
            <p>R$ {preco}</p>
          </div>
        </div>
      </div>
    );
}
