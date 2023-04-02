import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import axios from "axios"
import swal from 'sweetalert'
import { accionType } from '../../context/reducer'
import { useStateValue } from '../../context/Stateprovider';
import { useEffect } from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountUser from '../User/AccountUser'
import { _url } from "../envairoment";



function Signin() {
    const [{ user }, dispatch] = useStateValue()
    useEffect(() => {
        window.scrollTo(0, 0);
       
    }, [])

    const responseGoogle = (response) => {
        const UserData = {
            email: response.profileObj.email,
            password: response.googleId + "Ep",
        }
        detectFrom(UserData)
    }
    
    async function signinUser(event) {
        event.preventDefault()
        const UserData = {
            email: event.target[0].value,
            password: event.target[1].value,
        }
        detectFrom(UserData)
    }

    async function detectFrom(UserData) {
        await axios.post(`${_url}api/signin`, { UserData })
            .then(response => {
                if (response.data.success === false) {
                    swal({
                        title: "error",
                        icon: "error",
                        text: response.data.error,
                        buttons: "ok"
                    })
                }
                else if (response.data.success === true) {
                    localStorage.setItem("token", response.data.response.token)
                    swal({
                        title: "Login....",
                        icon: "success",
                        text: "You have started sesion",
                        buttons: "ok"
                    })
                }
                console.log(response.data.response)
                dispatch({
                    type: accionType.USERDB,
                    user: response.data.response
                })
                
            })
    }
    return (
        <>
      {!user?
                <div className="desespero">
                    <form className="formSign row signInUp-Input" onSubmit={signinUser}>
                        <div className="mb-3 col-12">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Please enter a username.</div>
                        </div>
                        <div className="mb-3 col-12" >
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                            <div id="emailHelp" className="form-text">Please enter a password.</div>
                        </div>
                        <div className="mb-3 form-check col-12 signInUp-CheckLabel">
                            <input type="checkbox" className="form-check-input signInUp-Check" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>

                        <div className="signInUp-btnInUp" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <input type="submit" className="btn d-flex btn-signin btn btn-primary" value="Sign In" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ display:"flex", justifyContent:"center", flexDirection:"column"}}>
                                <div style={{ margin:"4px" , backgroundColor: "white", borderStyle: "solid", borderColor: "#ff4b4b", borderRadius: "10px", display: "flex", justifyContent: "center" }}>
                                    <GoogleLogin
                                        clientId="800359852680-6rhb9r988gompretejui4b0lmr8ok60i.apps.googleusercontent.com"
                                        buttonText="SignIn with Google Account"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </div>
                            {/*     <div style={{ margin:"4px", backgroundColor: "rgb(76, 105, 186)", borderStyle: "solid", borderColor: "#ff4b4b", borderRadius: "10px", display: "flex", justifyContent: "center" }}>
                                    <FacebookLogin
                                        appId="1157819554991138"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                    />
                                </div> */}
                            </div>
                        </div>

                        <div className="helpForm signInUp-LinkSignUp" >
                            <div className="d-flex textSignUp" >

                                <h4>Don't have an account?</h4>
                                <LinkRouter className="signInUp-toSignUp" to='/signup'> Click here...</LinkRouter>
                              
                            
                            </div>
                        </div>

                    </form>
                </div>:
            <AccountUser/>}
                
                
        </>
    )
}
export default Signin;

