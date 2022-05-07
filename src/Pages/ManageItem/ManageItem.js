import React, { useState } from 'react';
import './ManageItem.css';

import useItemDetail from './../../hooks/useItemDetails';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const ManageItem = () => {
    const {id}=useParams();
    const [itemDetail] = useItemDetail(id);
    // const currentItems=itemDetail.quantity;
    const [deliver,setDeliver]=useState();
    const [stocOut,setStockOut]=useState(false);

    useEffect(()=>{
        console.log("Current Stock:", deliver);
        setDeliver(itemDetail.quantity);
        if (itemDetail.quantity  === 0) {
          console.log("Stock Out");
          setStockOut(true);
        }
    },[itemDetail])


    const deliverItem=()=>{
        
        
        if(deliver>0){
            const updateQty=deliver-1;
            setDeliver(updateQty);
            toast.success("1 Item Delivered!");
        
        }
        else{
            toast.error("Stock Out");
            setStockOut(true);
        }
        
    }
    
    

    
    
    
    return (
      <div>

        <div className="card-container">
          <div className="card-img">
            <img src={itemDetail.img} alt="product-img" />
          </div>
          <div className="card-description">
            <h5>{itemDetail.productName}</h5>
            <h3 className="text-danger">${itemDetail.price}</h3>
            <p>{itemDetail.description}</p>
            <p>Supplier: {itemDetail.supplierName}</p>
            <h6>Stock:{deliver}</h6>
            {
                stocOut? <h6 className='text-danger btn-link'>Stock Out</h6> :
                <></>
            }
          </div>
          <button
            onClick={() => deliverItem(id)}
            className=" btn btn-info  btn-block"
          >
            Deliver Item
          </button>
        </div>
      </div>
    );
};

export default ManageItem;