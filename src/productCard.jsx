import React from 'react';

function ProductCard({name, price, imageUrl})
{
    return 
    (
        <div className="product-card">
            <img src={imageUrl} alt={name} />
            <h3> {name} </h3>
            <p> Price: ${price}</p>
        </div>
    );
}
export default ProductCard;