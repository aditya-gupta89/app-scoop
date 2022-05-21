import React from 'react'
import classes from './DetailForm.module.css'
import { useForm } from 'react-hook-form';
const DetailForm = (props) => {
    const {register,handleSubmit,formState: { errors }}=useForm();
    const onSubmit=(data)=>{
        props.onSaveDetailData(data)    
    }
  return (
   <div className='container mt-4'>
<form onSubmit={handleSubmit(onSubmit)} className="row g-3">
  <div className="col-md-6">
    <label  className="form-label" >First Name</label>
    <input type ="text" className="form-control" {...register('firstname')}/>
  </div>
  <div className="col-md-6">
    <label   className="form-label">Last Name</label>
    <input type="text" className="form-control" {...register('lastname')}/>
  </div>
  
  <div className="col-8">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" {...register('address')}/>
  </div>
  
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select" {...register('state')}>
      <option selected>Choose...</option>
      <option value="1">Gurgaon</option>
      <option value="2">Delhi</option>
      <option value="3">Uttar Pradesh</option>
    </select>
  </div>
  <div class="col-md-4">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control"
     {...register('email',{
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     })}/>
     {errors.email && <p>Please check the Email</p>}   
  </div>
  <div className="col-4">
    <label   className="form-label">DOB</label>
    <input type="date"  min="2022-05-01"className="form-control" required {...register('DOB')}/>
  </div>
  {/* {errors.DOB && errors.DOB.type==="required" && <div style={{color:'red'}}>please pick the date</div>} */}
  <div class="col-md-4 ">
    <label  className="form-label">Contact No</label>
    <input type="tel" class="form-control" id="inputEmail4"   
     {...register('contact',{
            required: true
     })}/>
    {errors.contact && errors.contact.type==="required" && <div style={{color:'red'}}>please enter the contact no</div>}
  </div>
  <div className="col-md-6">
    <label htmlFor="inputState" className="form-label">Cake Flavour</label>
    <select id="inputState" className="form-select" {...register('cakeflavour')}>
      <option selected>Choose...</option>
      <option value="1">Chocolate Cake</option>
      <option value="2">Vanilla Cake</option>
      <option value="3">Black Forest Cake</option>
      <option value="4">Butterscotch Cake</option>
    </select>
  </div>
  <div className="col-6">
  <label  className="form-label">Size in pounds</label>
    <input type="number" min='1' max='5' className="form-control" {...register('size')}/>
  </div>
  <div className="col-12">
    <button onClick={props.onCancle} className="btn btn-primary">Cancel</button>
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
  )
}

export default DetailForm
