
import React from 'react'
import './AuthPage.css'
import Form from './Form'

const AuthPage = () => {

    return (
        <div className="row authpage">
            <div className="col-md-6">
            <img className="authpage__img" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook"/>
            <h3 className="authpage__text">Facebook helps you connect and share with the people in your life.</h3>
            </div>
            <div className="col-md-6  p-5">
                <Form/>
            </div>
        </div>
    )
}

export default AuthPage