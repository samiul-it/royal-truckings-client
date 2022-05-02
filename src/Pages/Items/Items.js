import React from 'react';
import useItems from './../../hooks/useItems';

const Items = () => {
    const [items,setItems]=useItems([]);
    return (
        <div>
            <h1>This is Items Page {items.length}</h1>

           
        </div>
    );
};

export default Items;