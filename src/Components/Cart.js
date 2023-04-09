import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Shop.css'

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(savedCart);
    }, []);

    const handleCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

    }



    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div className='container'>
            <h1 className='center'>Cart</h1>
            {cart.length > 0 ? (
                <>
                    <ul className='cart-list'>
                        {cart.map((product) => (
                            <li className='cart-list-items' key={product.id}>
                                <div className='item-child-1'>
                                    {product.title}
                                </div>
                                <div className='item-child-2'>
                                    ${product.price}
                                    <button className='remove-item-btn' onClick={() => { handleCart(product.id) }}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3 className='cart-total'>Total Price: ${totalPrice.toFixed(2)}</h3>

                    <Link to='/checkout'><button className='checkout-btn'>Checkout</button></Link>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default Cart;
