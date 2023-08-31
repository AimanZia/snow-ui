import React, { useEffect, useState } from 'react'

const ServiceCard = ({info}) => {
  const [extractedDate , setExtractedDate] = useState("");

  useEffect(()=>{
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const dateParts = info.serviceCreationDate.split(" ");
    const day = dateParts[2];
    const month = months.indexOf(dateParts[1]);
    const year = dateParts[5];

    const dateObj = new Date(year, month, day);
    const formattedDate = dateObj.toDateString();
    setExtractedDate(formattedDate);
  },[])
  return (
    <div className='serviceCard shadow-sm rounded'>
      <div className='col-md-10' style={{display:"inline-block"}}>
        <label className='labelCss'>Name</label>
        <span className='titleXl'>{info.serviceName}</span>

        <label className='labelCss'>Description</label>
        <span className='description'><p>{info.serviceDescription}</p></span>

        <label className='labelCss'>Last Updated At:</label>
        <span className='description'>{extractedDate}</span>
      </div>
      <div className='col-md-2' style={{display:"inline-block"}}>
      <button type="button" className="btn btn-outline-dark serviceCardButtons">Edit</button>
      <button type="button" className="btn btn-outline-dark serviceCardButtons">Delete</button>
      </div>
    </div>
  )
}

export default ServiceCard;