import React, { useState } from 'react'
//import { useHistory } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';

const host = 'http://localhost:5000';


const Signup = () => {//srtalert is comming from props 

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    //let history = useHistory();//for login
    let navigate = useNavigate(); //for login

    const handleSubmit = async (e) => {
        e.preventDefault();//not reload page


        const { name, email, password } = credentials;//destructure all element

        //call Backend Api 
        const response = await fetch(`${host}/api/auth/createuser`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ name, email, password }) // body data type must match "Content-Type" header

        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        //console.log(json)
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authorization);

            navigate('/') // redirect to home  page

        }
        else {

        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })//edit update credintial
    }
    return (
        <div className="container mt-1">

            <h2>Create an account to Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="namehelp" />
                    <div id="name" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>

                <div className="container signin mt-2">
                    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
                </div>
            </form>
        </div>
    )
}

export default Signup;
