import React from 'react'

export default function ProductListItem(props) {
  return (
    <div className='d-flex m-2 align-items-center justify-content-center' >
        <div>
            <img className='me-4' src={props.thumbnail} height={150} width={180} alt={props.title} />
        </div>
            <h5 className='card-title me-4 '>{props.title}</h5>
            <h6 className='me-4 mt-2'>Price:&#x20B9;{props.price}</h6>
            <button className='btn btn-warning me-3' onClick={props.decrementItem}>-</button> 
            <span className='ms-3'>Quantity :{props.count}</span>
            <button className='btn btn-warning ms-3' onClick={props.incrementItem}>+</button>
            <button className='btn btn-danger ms-3' onClick={props.removeItem}>Remove</button>
    </div>
  )
}
