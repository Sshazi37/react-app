import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Assets/Shop.css';

function SingleProduct() {
    const { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState();
    const history = useNavigate();


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error))
    }, [url]);

    const handleBuyNow = () => {
        // get cart from local storage or initialize to an empty array
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // check if item is already in cart
        const itemIndex = cartItems.findIndex(item => item.id === product.id);

        if (itemIndex === -1) {
            // item not in cart, add it with quantity of 1
            cartItems.push({ ...product, quantity: 1 });
        } else {
            // item already in cart, increment quantity by 1
            cartItems[itemIndex].quantity++;
        }

        // save updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // redirect to cart page
        history('/cart');
    }

    if (!product) {
        return <div>Loading...</div>
    }
    return (
        <>
            <div className='container'>
                <div className='product-details-container'>
                    <div className='product-image-container'>
                        <img className='prodcut-image' src={product.image} alt={product.title} />
                    </div>
                    <div className='product-detail'>
                        <h1>{product.title}</h1>
                        <h3>${product.price}</h3>
                        <h4>Rating {product.rating.rate}</h4>
                        <p>{product.description}</p>
                        <div className="view-btn">
                            <button onClick={handleBuyNow}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleProduct