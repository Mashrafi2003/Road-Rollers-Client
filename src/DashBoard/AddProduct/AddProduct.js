import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/cycle',{
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
        <div>
            <h3 >Add A New Item</h3>
            <form className='form-service' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")}  placeholder='Name' required/>
      <input {...register("description")}  placeholder='description' required/>
      <input {...register("img")}  placeholder='Image URL' required/>
      {/* <input type="date" {...register("date" )} required/> */}
      <input type="number" {...register("price" )} required placeholder='Price'/>

      <input className='btn btn-warning' type="submit"/>
    </form>
        </div>
    );
};

export default AddProduct;