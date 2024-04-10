import React, { useState } from 'react'
import { useCart } from './CartContext';
import Products from './Products'

const Shop = () => {

    const { addToCart } = useCart();

    return (
        <>
            <div className="container">
                <div className="row">
                    {Products.map((ele) => {
                        return (
                            <div className="col-md-4 col-12 my-3" key={ele.id} >
                                <div className="card">
                                    <img src={ele.ProductImage} alt="watch" className='img-fluid card-img' />
                                    <div className="card-body d-flex align-items-center justify-content-between">
                                        <p>{ele.name}</p>
                                        <button  onClick={() => addToCart(ele)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Shop