import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { SNOW_API } from '../utils/Constants';

const ServicesContainer = () => {

   const [services,setServices] = useState([]);

    const getServicesData = async() =>{
        const data = await fetch(SNOW_API);
        const servicesJson = await data.json();
        setServices(servicesJson.services);
        console.log()
        console.log(services);
    };

    useEffect(()=>{
    getServicesData();
    },[]);

    if(services.length===0)
    {
        return null;
    }

 
  return (
    <div className='serviceContainer'>
        {
            services.map( service =><ServiceCard info={service} key={service.id}/> )
        }
        
    </div>
  )
}

export default ServicesContainer