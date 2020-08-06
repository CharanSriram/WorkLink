import React from 'react'
import './signup.css'

function SignUp(props) {
    return (
        <div id="body">
            <div id="container">
                <h1 id="signup">Signup</h1>
                <input id="email" placeholder="Email"></input>
                <input id="password" type="password" placeholder="Password"></input>
                <button onClick={props.click} id="submit">Signup</button>
                <div style={{height: "1px", width: "30vh", margin: "20px", backgroundColor: "rgba(0, 0, 0, 0.20)"}}></div>
                <p style={{fontSize: "14px", margin: "0"}}>Or, <a style={{cursor:"pointer", textDecoration: "underline"}}>login</a></p>
            </div>
        </div>
    )
}

export default SignUp;