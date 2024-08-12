// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import Nav from "../../components/navBar/Nav";

const Home = () => {
  const backgroundColors = [
    "rgba(0, 177, 255, 1)",
    "rgba(255, 122, 0, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 197, 205, 1)",
    "rgba(109, 206, 40, 1)",
  ];

  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 1)");

  const handleSelect = (selectedIndex) => {
    setBgColor(backgroundColors[selectedIndex]);
  };

  return (
    <div
      id="imageContainer"
      className="image-container"
      style={{ backgroundColor: bgColor }}
    >
      <Nav />

      <img
        src="https://i.ibb.co/Y743fsg/BACK-SITE-CD.png"
        alt="Imagem com Opacidade"
        className="image"
      />
      <Carousel id="carouselExample" onSelect={handleSelect} interval={null}>
        <Carousel.Item className="custom-item">
          <a href="/photoshop" title="PHOTOSHOP - CLIQUE AQUI E VEJA O PACOTE!">
            <img src="https://i.imgur.com/D95A3II.png" className="resp-img" />
          </a>
          <Carousel.Caption className="d-flex justify-content-center mb-md-1 mb-xl-5 custom-infos">
            <div className="w-50 infos">
              <h3>Photoshop</h3>
              <p>
                Aqui você vai encontrar mais de 50Gb de artes prontas para usar,
                clique na imagem e confira, arquivos PSD de todos os modelos
                possiveis desde saúde, beleza, alimentação até eventos.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="custom-item">
          <a href="/illustrator" title="ILLUSTRATOR - CLIQUE AQUI E VEJA O PACOTE!">
            <img src="https://i.imgur.com/MN4W33R.png" className="resp-img" />
          </a>
          <Carousel.Caption className="d-flex justify-content-center mb-md-1 mb-xl-5 custom-infos">
            <div className="w-50 infos">
              <h3>Illustrator</h3>
              <p>
                Um pacote com mais de 30 GB de arquivos Illustrator contém uma
                vasta coleção de ilustrações vetoriais detalhadas e complexas,
                ideais para projetos extensivos.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="custom-item">
          <a href="/premiere" title="PREMIERE - CLIQUE AQUI E VEJA O PACOTE!">
            <img src="https://i.imgur.com/revyDjO.png" className="resp-img" />
          </a>
          <Carousel.Caption className="d-flex justify-content-center mb-md-1 mb-xl-5 custom-infos">
            <div className="w-50 infos">
              <h3>Premiere</h3>
              <p>
                No Pack do premiere que te oferecemos você irá encontrar uma
                variedade grande de pugins e arquivos como, Videos effects, Luts
                filtros, Xmotion packs, youtube animation e muito mais.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="custom-item">
          <a href="/canva" title="CANVA - CLIQUE AQUI E VEJA O PACOTE!">
            <img src="https://i.imgur.com/MNgxORZ.png" className="resp-img" />
          </a>
          <Carousel.Caption className="d-flex justify-content-center mb-md-1 mb-xl-5 custom-infos">
            <div className="w-50 infos">
              <h3>Canva</h3>
              <p>
                Milhares de artes editaveis para o canva, para tornar mais
                rapido e mais profissional suas entregas, fique a vontade para
                apoveitar as novidades que trazemos para você, artes desde
                cartões interativos, cardápios até certificados.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="custom-item">
          <a href="/coreldrawn" title="CORELDRAWN - CLIQUE AQUI E VEJA O PACOTE!">
            <img src="https://i.imgur.com/R0jJDIM.png" className="resp-img" />
          </a>
          <Carousel.Caption className="d-flex justify-content-center mb-md-1 mb-xl-5 custom-infos">
            <div className="w-50 infos">
              <h3>CorelDrawn</h3>
              <p>
                Vetores diversos, Crachás, packs de sublimação, e muito mais
                nesse poderoso pacote de arquivos editaveis do Corel o
                queridinho das gráficas que trazemos para você.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
