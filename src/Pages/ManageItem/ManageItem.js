import React from 'react';

import useItemDetail from './../../hooks/useItemDetails';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';


const ManageItem = () => {
    const {id}=useParams();
    
    
    
    return (
        <div>
            <h1>Manage This Item:{id}</h1>
        </div>
    );
};

export default ManageItem;