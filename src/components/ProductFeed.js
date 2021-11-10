import React from 'react';
import Product from './Product';

function ProductFeed({ products }) {
    return (
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {products.map(({ id, title, price, description, category, image}) =>
                 <Product 
                 key={id}
                 id={id}
                 description={description}
                 title={title}
                 category={category}
                 price={price*565}
                 image={image}
               />
            )}
        </div>
        )

        };

export default ProductFeed
