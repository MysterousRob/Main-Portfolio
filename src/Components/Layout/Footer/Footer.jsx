import React from 'react';
import FooterNav from './FooterNav';
import MyForm from '../../../Pages/State/ContactForm/Form';


const Footer = () => {
  return (
    <>
      <div className='h-[300px] bottom-0 left-0 w-full mt-5 pt-2.5 bg-black text-center'>
        <h1 className='text-white'>Contact Me</h1>
        <div className='flex bg-black items-center justify-center'>
            <MyForm />
            <FooterNav />
        </div>
      </div>
    </>
  )
}



export default Footer;