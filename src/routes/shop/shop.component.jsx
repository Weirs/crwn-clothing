import { useContext } from 'react';

import SHOP_DATA from '../../shop-data.json';
import { ProductsContext } from '../../contexts/product.context';

import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {

    const {products} = useContext(ProductsContext);
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    )
};

export default Shop;