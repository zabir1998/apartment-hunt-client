import React from 'react';
import { useForm } from 'react-hook-form';

import { useParams } from 'react-router-dom';
import { fakeData } from '../../../fakeData/fakeData';
import image1 from '../../../images/images/Rectangle 406.png';

import Spics from '../Spics/Spics';
import './Pics.css';


const Pics = () => {
    
    let { apartmentId } = useParams();
  const apartment = fakeData.find(
    (apt) => apt.id.toString() === apartmentId.toString()
  );
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  const {  name,  id , price} = apartment;
  // console.log(destination);
    return (
        <section className="row">
            <div className="col-md-6 pic">
                <div >
                <img src={image1} className="bgimg" alt=""/>
                </div>
                <div>
                    <Spics></Spics>
                    <div className="d-flex justify-content-between">
                    <h2>{name}</h2>
                    <h2>${price}</h2>
                    </div>
                    
                    <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                    <h2>Price Details-</h2>
                    <p>Rent/Month:{price} (negotiable) Service Charge : 8,000/= Tk per month, subject to change Security Deposit : 3 month’s rent Flat Release Policy : 3 months earlier notice required</p>
                    <h2>Property Details-</h2>
                    <p>
                    Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
Flat Size : 3000 Sq Feet.
Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera

                    </p>
                </div>
            </div>
            <div className="col-md-6 ">

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
  
   
  
   <input name="name" style={{width:400,paddingBottom:10,marginBottom:10,boxShadow:40,borderRadius:5}} placeholder="Your Name" ref={register({ required: true })} />
   
   {errors.exampleRequired && <span>Name is required</span>}<br></br>
   <input name="email" style={{width:400,paddingBottom:10,marginBottom:10,boxShadow:40,borderRadius:5}} placeholder="Your Email" ref={register({ required: true })} />
   
   {errors.exampleRequired && <span>Email is required</span>}<br></br>
   <input name="phone" style={{width:400,paddingBottom:10,marginBottom:10,boxShadow:40,borderRadius:5}} placeholder="Your Phone" ref={register({ required: true })} />
   
   {errors.exampleRequired && <span>Phone is required</span>}<br></br>
   <input name="apartmentName" style={{width:400,paddingBottom:10,marginBottom:10,boxShadow:40,borderRadius:5}} defaultValue={name} ref={register({ required: true })} />
   
   {errors.exampleRequired && <span>This field is required</span>}<br></br>
   <input name="message" style={{width:400,paddingBottom:100,marginBottom:10,boxShadow:40,borderRadius:5}} placeholder="Your Message" ref={register({ required: true })} />
   
   {errors.exampleRequired && <span>Message is required</span>}<br></br>
   
   <input type="submit" style={{width:400,marginBottom:10,boxShadow:40,borderRadius:5,color:"white",backgroundColor:"#275A53"}} />
 </form>
            </div>
        </section>
    );
};

export default Pics;