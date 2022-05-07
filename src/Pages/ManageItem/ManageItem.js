import React, { useState } from 'react';

import useItemDetail from './../../hooks/useItemDetails';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import { useEffect } from 'react';


const ManageItem = () => {
    const {id}=useParams();
    
    // const [item,setItem]=useState({});
    // useEffect(()=>{
    //     const url = `http://localhost:5000/item/${id}`;
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setItem(data));
    // },[id])

    const [itemDetail]=useItemDetail(id);
    
    
    return (
        <div>
            <h1>Manage This Item:{id}</h1>
            <h2>{itemDetail.productName}</h2>
        </div>
    );
};

export default ManageItem;