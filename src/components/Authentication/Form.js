import React, { useState } from 'react'
import SignupModal from './SignupModal'

const Form = () => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const onSubmit =(e)=>{
        e.preventDefault()
        console.log('Submitted')
    }

    return (
        <div className="card w-60  form">
            <div className="card-body">
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="form-group ">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button  className="form__btnSignin btn btn-block btn-primary mt-4 mb-2"><h5>Log in</h5></button>
                    <a href="#!" className="">Forgot Password</a>
                    <hr />
                </form>
                {/* <button className="form__btnSignup btn  btn-success">Create new account</button> */}
                <SignupModal/>
            </div>
        </div>

    )
}

export default Form
