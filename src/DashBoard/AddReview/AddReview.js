import React from 'react';
import { useForm } from 'react-hook-form';
import './AddReview.css'

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://boiling-headland-35845.herokuapp.com/review',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Order Processed')
                reset()
            }
        })
    };
    return (
                 <div className='submit-service'>
              <h2 className='text-secondary'>Submit To Continue</h2>
          <form className='form-service' onSubmit={handleSubmit(onSubmit)}>
      
      <input {...register("name")} placeholder='Your Name'    required/>
      <input type="number" {...register("rating", { min: 0, max: 5 })} placeholder='Rating(1-5)'/>
    <textarea {...register("review")} placeholder='Your Review' required/>
      
      <input className='btn btn-warning' type="submit"/>
    </form>
          </div>
        
    );
};

export default AddReview;