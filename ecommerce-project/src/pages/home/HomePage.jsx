import { Header } from '../../components/Header';
import { useEffect, useState } from 'react';
import './HomePage.css';
import axios from 'axios';
import { ProductsGrid } from './ProductsGrid';


export function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };
        getHomeData();
    }, []);

    return (
        <>
            <title>Ecommerce</title>
            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}