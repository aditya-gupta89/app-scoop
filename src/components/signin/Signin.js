import React from 'react'
// import { useSelector, } from 'react-redux';
// import { useDispatch } from 'react-redux';
import classes from './Signin.module.css'
import ReCAPTCHA from "react-google-recaptcha";
import Header from '../header/Header';

import { useRef,useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
const Signin = () => {
    const recaptchaRef = useRef();
    const navigate=useNavigate();
    const {register,handleSubmit,formState: { errors }}=useForm();  
    const onSubmit=(data)=>{
        console.log(data)
        const password=localStorage.getItem(data.email);
        if(password){
        alert('Email Id is Exist');
        return;
        }
        localStorage.setItem(data.email,data.password);
        navigate('/dashboard');
    };
   
    return (
        <>
        <Header/>
      <section className={classes.auth}>
        <h1>Signin</h1>
        <form onSubmit={handleSubmit(onSubmit)}> 
        <div className={classes.control}>
            <label htmlFor='userName'>UserName</label>
            <input type='text' id='username'  
            {...register('username',{
                required: true
            })}
            />
          </div>
          {errors.username && <p>Please enter the username</p>}
        <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email'
             {...register('email',{
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
             />
          </div>
          {errors.email && <p>Please check the Email</p>}
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              
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
            />
          </div>
          {errors.password && errors.password.type==="required" && <div style={{color:'red'}}>please enter the password</div>}
          {errors.password && <div style={{color:'red'}}>{errors.password.message}</div>}

          <ReCAPTCHA
           ref={recaptchaRef}
           sitekey="6LcxQwggAAAAAL9-mBTX7DjCDS-Fd8yGBmb-dqXh"
          />
          <div className={classes.actions}>
             <button>Signin</button>
            
          </div>
         
        </form>
      </section>
      </>
    );
}

export default Signin
