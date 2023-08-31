import React, { useState } from 'react'
import { SNOW_API } from '../utils/Constants';

const AddServices = () => {
    const [serviceName, setServiceName] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch(SNOW_API, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    serviceName: serviceName,
                    serviceDescription: serviceDescription,
                }),
            });
            const resultJson = await result.json();
            if(result.status === 201)
            {
                setMessage("Service Created Successfully");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='serviceContainer'>
            <span className='headingMenu'>Add Service</span>
            <div className='formWrapper'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Service Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Service Name"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Service Desription</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            value={serviceDescription}
                            onChange={(e) => setServiceDescription(e.target.value)}></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-success">Success</button>
                    </div>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>
        </div>
    )
}

export default AddServices