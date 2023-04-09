import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function FeaturedProducts() {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, []);

    const filteredProducts = products?.filter(product => product.rating.rate > 4.2);

    if (!products) {
        return (<div>Loading...</div>)
    }

    return (
        <div className='mt-15'>
            <h1 className='center'>
                Featured Products
            </h1>
            <div className='shop-container'>
                {filteredProducts.map((product) => {
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

        </div>
    )
}

export default FeaturedProducts