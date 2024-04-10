import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  let [finalCart, setFinalCart] = useState([])

  const { cart } = useCart();
  useEffect(() => {
    setFinalCart(cart)
  }, [])

  console.log(finalCart)

  return (
    <div>
      <h2>Cart</h2>

      <div className="container">
        <div className="row">
          {
            finalCart.map((ele) => {
              return (
                <div className='col-md-4 col-12 my-3'>
                  <div className="card">
                    <img src={ele.ProductImage} alt="watch" className='img-fluid card-img' />
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <p>{ele.name}</p>
                      <h5>₹ {ele.price}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Cart;
