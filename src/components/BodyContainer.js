import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const BodyContainer = () => {
  return (
    <>
    <Header/>
    <div className='wrapperContent bodyContainer'>
        <Outlet/>
    </div>
    <Footer/>
    </>
  );
};

export default BodyContainer;