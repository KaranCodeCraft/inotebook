import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import AlertContext from '../Context/AlertContext'

const Login = () => {
    const alertcontext = useContext(AlertContext)
    const {showAlert} = alertcontext

    const [cred, setCred] = useState({email: "", password: ""})
    let navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: cred.email, password: cred.password}),
          });
          const json = await response.json()
          console.log(json)
          if(json.sucess){
            // redirect 
            localStorage.setItem('token', json.auth_token)
            navigate('/')
            showAlert('Account Logged In succesfully','sucesss')
          }else{
            showAlert('Invalid Credentials','danger')
          }
    };
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
      };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        name="email"
                        onChange={onChange}
                        value={cred.email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={onChange}
                        value={cred.password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
