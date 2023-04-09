import React from 'react'
import '../Assets/Shop.css'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <>

            <div className="sm-container">
                <div className="card">
                    <Link to={props.link}>
                        <img src={props.image} alt={props.title} />
                    </Link>
                    <div className="card-body">
                        <div className="row">
                            <div className="card-title">
                                <h4>{props.title}</h4>
                                <h3>$ {props.price}</h3>
                            </div>

                        </div>
                        <hr />
                        <p>
                            {props.description}
                        </p>
                        {/* <div className="btn-group">
                            <div className="btn">
                                <a href>Buy Now</a>
                            </div>
                            <a href> Cancel</a>
                        </div> */}
                        <div className="view-btn">
                            <Link to={props.link}>{props.details}</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

ProductCard.defaultProps = {
    title: 'Product Name',
    price: '150',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi',
    details: 'View Details',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    link: '/shop/:id'
}

export default ProductCard