import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function ProductCart(props) {
    const navigate = useNavigate();
  return (
    <div className='card m-2' role='button' onClick={() => navigate(`/product/${props.id}`)}>
        <div>
            <img src={props.thumbnail} height={150} width={180} alt={props.title} className='' />
        </div>
        <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <h6>Price:&#x20B9;{props.price}</h6>
        </div>
        <div>
            {props.stock > 0?<button className='btn btn-dark'>AddtoCart</button> : <button className='btn btn-muted border border-dark'>OutOfStock</button>}
        </div>
    </div>
  )
}
