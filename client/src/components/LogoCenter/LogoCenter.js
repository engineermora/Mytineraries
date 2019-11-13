import React, { Component } from "react";
import logo from '../../img/MYtineraryLogo.png'
import './logoCenter.css'
// import { MdRestaurant, MdAirplanemodeActive, MdMusicNote, MdTrain } from "react-icons/md";

export default class LogoCenter extends Component {
  render() {
    return (
      <div className="containerLogo">
        <img src={logo} alt="logo" className="imageLogo"/>
      </div>
      );
  }
}
