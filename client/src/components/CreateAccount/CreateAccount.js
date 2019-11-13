import React, { Component } from 'react'

import Footer from '../Footer/Footer'
import './createAccount.css'

export default class CreateAccount extends Component {
   
    render() {
        return (
            <div className="containerCreateAccount">
                <h1>Create Account</h1>
                <label>Email: <input type="text" placeholder="name.lastname@email.ar"/></label> 
                <label>Password: <input type="pass" placeholder="***********"/></label> 
                <label>User Name: <input type="text" placeholder="userName"/></label> 

                <div className="containerButton">
                    <button>Submit</button>
                </div>
                <Footer />
            </div>
        )
    }
}
