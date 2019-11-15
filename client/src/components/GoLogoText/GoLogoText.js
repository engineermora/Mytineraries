import React, { Component } from 'react'
import '././goLogoText.css'
import imgGo from '../../img/circled-right-2.png'

export default class GoLogoText extends Component {
    render() {
        return (
            <div className="containerGoText">
                <h3>Find your perfect trip, designed by insiders who know and love their cities.</h3>
                <img src={imgGo} alt="Go" className="imgGo"/>
            </div>
        )
    }
}
