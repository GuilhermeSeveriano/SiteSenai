import React from "react";
import Card from "../card";

import "./home.css";

import Mecanico from "../../assets/images/mecanico.jpg";
import Pizzaiolo from "../../assets/images/pizzaiolo.jpg"
import EletEmb from "../../assets/images/eletemb.jpg";

export default function Home() {
  return (
    <div className="container container-home">
      <Card
        titulo="MECÂNICO - MOTOR CICLO DIESEL"
        image={Mecanico}
        desc="O Curso de Qualificação Profissional Mecânico de Motor Ciclo Diesel tem por objetivo o desenvolvimento de competências para realizar manutenção em Motor Ciclo Diesel utilizando ferramentas e seguindo normas e procedimentos técnicos, ambientais e de segurança."
        tempo={180}
        preco={1450}
      />
      <Card
        titulo="PIZZAIOLO"
        image={Pizzaiolo}
        desc="Pizzaiolo tem como objetivo o desenvolvimento de competências relativas à fabricação de pizzas e similares, utilizando máquinas e equipamentos em conformidade com as normas e procedimentos técnicos e de qualidade, segurança, higiene, saúde e preservação ambiental."
        tempo={40}
        preco={1000}
      />
      <Card
        titulo="ELETRÔNICA EMBARCADA"
        image={EletEmb}
        desc="O Curso de Aperfeiçoamento Profissional Eletrônica Embarcada tem por objetivo o desenvolvimento de competências relativas à manutenção dos sistemas eletroeletrônicos do veículo, de acordo com normas e procedimentos técnicos, ambientais e de segurança."
        tempo={120}
        preco={1970}
      />
    </div>
  );
}
