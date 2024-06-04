import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {auth} from './firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'
export function Signup(){
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')

     const handlesubmit= async (e)=>{
        e.preventDefault()
        try{
           await createUserWithEmailAndPassword(auth, email ,password)
           alert('Account Created')
        }catch(err){
            console.log(err)
        }
     }
    return(
        <div className="container">
            <form className="sign-up" onClick={handlesubmit}>
            <h2> SIGN-UP</h2>
            <div className="form-con">
             <label htmlFor="email">Email</label><br/>
             <input type="email" value={email} id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="form-con">
             <label htmlFor="email">Password</label><br/>
             <input type="password" value={password} id="email" onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
            <button>Submit</button><br/>
            <p>Already register? <Link to="/login">Login </Link></p>
            </form>
        </div>
    )
}