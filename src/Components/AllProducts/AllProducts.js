import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../ProductCard/ProductCard';

const AllProducts = ({ setCount }) => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    return (
        <div className='row container g-5 m-auto'>
            {
                allProducts.map(pd => <ProductCard pd={pd} setCount={setCount} key={pd.id} />)
            }
        </div>
    );
};

export default AllProducts;