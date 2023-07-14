import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
  return (
    <div className='bg-warning p-3'>
        <div className='row pt-2 pb-1'>
        <h3 className='row justify-content-center pt-2 pb-1'style={{fontSize:50}}>Pizza Delivery</h3>
            <div className='col-sm-12 col-md-7  col-lg-6 col-xl-5 d-flex'>
                <button className='btn btn-dark 'style={{width:'100px'}} onClick={() => navigate('/')}>Home</button>
                <button className='btn btn-dark ms-4' style={{width:'100px'}} onClick={() => navigate('/cart')}>Cart</button>
            </div>
        </div>
    </div>
  )
}
