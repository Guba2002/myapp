import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
  return (
    <div className='bg-warning p-3'>
        <h3>Pizza Delivery</h3>
        <div className='row justify-content-center pt-2 pb-1'>
            <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
                <button className='btn btn-dark me-4' onClick={() => navigate('/')}>Home</button>
                <input className='form-control' type='search' placeholder='Search' />
                <button className='btn btn-dark ms-3'>Cart</button>
            </div>
        </div>
    </div>
  )
}
