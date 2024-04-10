import React, { useState } from 'react';
import { useCart } from './CartContext';
import Products from './Products';

const Shop = () => {
    const { cart, addToCart } = useCart();
    const [sortOrder, setSortOrder] = useState('asc'); 

    const sortProducts = (order) => {
        const sortedProducts = [...Products].sort((a, b) => {
            if (order === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        return sortedProducts;
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const handleAddToCart = (product) => {
        const isItemInCart = cart.some(item => item.id === product.id);

        if (!isItemInCart) {
            addToCart(product);
            alert('Item added to cart');
        } else {
            alert('Item is already in cart');
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <select value={sortOrder} onChange={handleSortChange}>
                            <option value="asc">Low to High</option>
                            <option value="desc">High to Low</option>
                        </select>
                    </div>
                    {sortProducts(sortOrder).map((ele) => {
                        return (
                            <div className="col-md-4 col-12 my-3" key={ele.id}>
                                <div className="card">
                                    <img src={ele.ProductImage} alt="watch" className='img-fluid card-img' />
                                    <div className="card-body d-flex align-items-center justify-content-between">
                                        <div>
                                            <p>{ele.name}</p>
                                            <h5>₹ {ele.price}</h5>
                                        </div>
                                        <button onClick={() => handleAddToCart(ele)}>Add to Cart</button>
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

export default Shop;
