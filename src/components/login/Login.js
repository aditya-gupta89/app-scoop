import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import classes from './Login.module.css'
import { useRef,useState} from 'react';
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import Header from '../header/Header';
const Login = () => {
    const navigate=useNavigate();
    const recaptchaRef = useRef();
    const {register,handleSubmit,formState: { errors }}=useForm();  
      
    // const grecaptchaObject = window.grecaptcha
    const onSubmit=(data)=>{
        // recaptchaRef.current.execute();
        const password=localStorage.getItem(data.email);
        if(password!==data.password)
          alert("email or password does not match");
        else
        navigate('/dashboard');
    
    };
      
    
      
    return (
      <>
      <Header/>
      <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
             type='email'
             id='email'
             {...register('email',{
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}  />
          </div>
          {errors.email && <p>Please check the Email</p>}
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
            {...register('password',{
                required: true,
                minLength:{
                    value:8,
                    message:"must be 8 character"
                },
                pattern: {
                    value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                    message:"must include lower, upper, number,special character"
                }
            })}
            autoComplete='off'
            />
          </div>
          {errors.password && errors.password.type==="required" && <div style={{color:'red'}}>please enter the password</div>}
          {errors.password && <div style={{color:'red'}}>{errors.password.message}</div>}



          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcxQwggAAAAAL9-mBTX7DjCDS-Fd8yGBmb-dqXh"
    
          />
          <div className={classes.actions}>
           <button type='submit' >Login</button>
          </div> 
        </form>
      </section>
      </>
    );
}

export default Login
