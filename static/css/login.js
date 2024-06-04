import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {auth} from './firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'
export function Login(){
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')

     const handlesubmit= async (e)=>{
        e.preventDefault()
        try{
           await signInWithEmailAndPassword(auth, email ,password)
           alert('login successfull')
        }catch(err){
            console.log(err)
        }
     }
    return(
        <div className="container">
            <form className="Login" onClick={handlesubmit}>
            <h2>LOGIN</h2>
            <div className="form-con">
             <label htmlFor="email">Email</label>
             <input type="email" value={email} id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="form-con">
             <label htmlFor="email">Password</label>
             <input type="password" value={password} id="email" onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
            <button>Login</button><br/>
            <p>Don`t have an Account ? <Link to="/signup">Register</Link> </p>
            </form>
        </div>
    )
}