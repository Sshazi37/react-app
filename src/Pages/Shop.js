import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'

function Shop() {
    // const products = [
    //     { id: 1, title: 'name of the product', price: 150 },
    //     { id: 2, title: 'name of the product', price: 100 },
    //     { id: 3, title: 'name of the product', price: 180 }
    // ];
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, []);

    if (!products) {
        return (<div>Loading...</div>)
    }

    return (
        <>
            <h1 className='center'>Shop</h1>
            <div className='shop-container'>
                {products.map((product) => {
                    return (
                        <ProductCard key={product.id}
                            title={product.title.substring(0, 50) + '...'}
                            price={product.price}
                            description={product.description.substring(0, 80) + '...'}
                            image={product.image}
                            link={'/shop/' + product.id}

                        />
                    )
                })}

            </div>
        </>
    )
}

export default Shop