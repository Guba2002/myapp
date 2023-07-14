import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ProductListItem from '../components/ProductListItem'
import { modifyItem, removeItem } from '../redux/reducer/cart';

export default function Checkout() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const incrementItem = (item) => {
    dispatch(modifyItem({...item, count: item.count + 1}));
  }
  const decrementItem = (item) => {
    if(item.count === 1){
      dispatch(modifyItem({...item, count: item.count}))
    }else{
    dispatch(modifyItem({...item, count: item.count - 1}));
    }
  }
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  }

  return (
    <>
      {list.length>0 ? (
        <>
        { list.map((item) => (<ProductListItem {...item} key={item.id}
       incrementItem={() => incrementItem(item)} 
       decrementItem={() => decrementItem(item)} 
       removeItem={() => removeItemFromCart(item)} 
       />
       ))}
       <button className='btn btn-dark' onClick={()  => navigate('/checkout')}>Place Order</button>
       </>
       ):( <h3>Empty Checkout</h3> 
      )}
    </>
  );
}
