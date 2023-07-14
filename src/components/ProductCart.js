import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { ProductList } from '../data/ProductList'
import { useDispatch , useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

export default function ProductCart(props) {
  const params = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    ProductList.find((element) => element.id === parseInt(params.id));

    const list = useSelector((state) => state.cart.list)
  const element = list.find((item) => item.id === props.id )
  
  const addToCart = () =>{
    dispatch(addItem(props))
  };
  return (
    <div className='card m-2' >
        <div>
            <img src={props.thumbnail} height={150} width={180} alt={props.title} role='button' onClick={() => navigate(`/product/${props.id}`)} />
        </div>
        <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <h6>Price:&#x20B9;{props.price}</h6>
        </div>
        <div>

            {props.stock > 0?
            ( element?.count > 0 ? 
              <button className='btn btn-dark mb-3' onClick={() => navigate('/cart')}>Go To Cart</button>
              :<button className='btn btn-dark mb-3' onClick={addToCart}>Add To Cart</button>
            )
             : <button className='btn btn-muted border border-dark mb-3'>OutOfStock</button>
             }
        </div>
    </div>
  )
}
