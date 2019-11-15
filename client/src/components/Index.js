import React, { Component } from "react";
import Header from "./Header/Header";
import LogoCenter from "./LogoCenter/LogoCenter";
import GoLogoText from "./GoLogoText/GoLogoText";
import ListImage from "./ListImage/ListImage";
import Footer from './Footer/Footer'

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <LogoCenter />
        <GoLogoText />
        <ListImage />
        <Footer />
      </>
    );
  }
}
