import React from 'react';
import ProductCard from './productCard'

const products = [
    {id: 101, name: goPro, price: 89.99, description: "Fully waterproof HERO12 Black, now tougher and more resilient than ever before.", imageUrl: },
    {id: 102, name: lenovoLaptop, price: $799, description: "Get Ultimate Gaming, Creating, & AI w/ GeForce RTX on HP® Gaming PCs", imageUrl: }, 
    {id: 103, name: speakerBar, price: $199, description:"Full immersion. For everything you play.", imageUrl:}, 
    {id: 104, name: appleWatch, price: $399, description:"Apple Watch is the ultimate device for a healthy life", imageURL: }, 
    {id: 105, name: sonyTelevision, price: $649, description: "Crystal-clear, high definition picture", imageUrl: }]
  
function ProductList()
    {
        return 
        (
            <div>
                <h3> Product List</h3>
                    {products.map(product => (
                        <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        />
                    ))}       
            </div>
        );
    }
    export default ProductList;