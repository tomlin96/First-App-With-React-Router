import React from 'react';
import { Link } from 'react-router-dom'
import Product from '../components/Product'

const ProductPage = ({ match }) => {
    return (
        <>
            <div>Strona Produkt</div>
            <Product id={match.params.id} />
            <Link to="/products"> Powrót fo listy produktów</Link>
        </>
    );
}

export default ProductPage;