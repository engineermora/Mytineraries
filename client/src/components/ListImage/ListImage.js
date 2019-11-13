import React, { Component } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./listImage.css";

import barcelona from "../../img/cities/barcelona.jpg";
import ny from "../../img/cities/ny.jpg";
import cartagena from "../../img/cities/Cartagena.jpg";
import villa from "../../img/cities/villa.jpg";

import buenosaires from "../../img/cities/buenosaires.jpg";
import toronto from "../../img/cities/../../img/cities/toronto.jpg";
import estambul from "../../img/cities/../../img/cities/estambul-turquia-dreams.jpg";
import penon from "../../img/cities/penon-de-guatape.jpg";

export default class ListImage extends Component {
  state = {
    carousel: 0
  };
  render() {
    const { carousel } = this.state;
    return (
      <div className="containerListImage">
        <h2>Popular MYtineraries</h2>
        {carousel === 0 ? (
          <div className="listaDeImagenes">
            <img src={cartagena} alt="cartagena" />
            <img src={penon} alt="penon" />
            <img src={buenosaires} alt="buenosaires" />
              <img src={villa} alt="villa" />
          </div>
        ) : (
          <div className="listaDeImagenes">
            <img src={ny} alt="newyork" />
            <img src={toronto} alt="toronto" />
            <img src={estambul} alt="estambul" />
            <img src={barcelona} alt="barcelona" />
          </div>
        )}
        <div className="containerButtonsCarousel">
          <div className="borderButton">
            <FaAngleLeft
              size="30"
              color="white"
              onClick={() =>
                this.setState({ carousel: carousel === 0 ? 1 : 0 })
              }
            />
          </div>
          <p>{this.state.carousel}</p>
          <div className="borderButton">
            <FaAngleRight
              size="30"
              color="white"
              onClick={() =>
                this.setState({ carousel: carousel === 1 ? 0 : 1 })
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
