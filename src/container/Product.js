import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

export default function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const props = ProductList.find((element) => element.id === parseInt(params.id));

  const list = useSelector((state) => state.cart.list)
  const element = list.find((item) => item.id === props.id )

  const addToCart = () => {
    dispatch(addItem(props))
  };

  return (
    <div className='card m-2'>
      <div>
        <img src={props.thumbnail} height={250} width={300} alt={props.title} className='' />
      </div>
      <div className='mt-3 card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <h6>Price:&#x20B9;{props.price}</h6>
      </div>
      <div>
        {props.stock > 0 ? (
          <>
            <button className='btn btn-dark' onClick={()  => navigate('/checkout')}>Buy Now</button>
            { element?.count > 0 ? 
              <button className='ms-5 btn btn-dark' onClick={() => navigate('/cart')}>Go To Cart</button>
              :<button className='ms-5 btn btn-dark' onClick={addToCart}>Add To Cart</button>
            }
          </>
        ) : (<button className='btn btn-muted border border-dark'>OutOfStock</button>)}
      </div>
    </div>
  )
}
