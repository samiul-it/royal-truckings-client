import React, { useState } from 'react';
import './ManageItem.css';

import useItemDetail from './../../hooks/useItemDetails';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';



const ManageItem = () => {
    const {id}=useParams();
    const [itemDetail] = useItemDetail(id);
    const [stockOut, setStockOut] = useState(false);

    const [deliver, setDeliver] = useState();
    
    const [itemQty,setItemQty]=useState(0);
    
    // console.log("Item", itemQty);
    const stockRef=useRef();

    const handleStockUpdate=(e)=>{
      e.preventDefault();
      const stock=stockRef.current.value;
      const stockInt=parseInt(stock)+itemDetail.quantity;
      setDeliver(stockInt);

      const updatedStock={stockInt};
      // console.log("DV", deliver);

      const url = `http://localhost:5000/item/${id}`;

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedStock),
      })
        .then((res) => res.json())
        .then((result) => {console.log(result)
          
        })
        .then(toast.success("Success!Item Added"));
    
      
    }


    useEffect(()=>{
        // console.log("Current Stock:", deliver);
        setDeliver(itemDetail.quantity);
        // console.log("item Details QTY", itemDetail.quantity);

        if (itemDetail.quantity  === 0) {
          // console.log("Stock Out");
          setStockOut(true);
        }
    },[itemDetail.quantity])


    const deliverItem=()=>{
        if(deliver>0){
          const newDeliver = deliver;
          const updateQty = newDeliver - 1;
          setDeliver(updateQty);
          // console.log("Updated QTY", updateQty, "and :", deliver);

          setItemQty(updateQty);

          // console.log("+", itemQty);
          toast.success("1 Item Delivered!");
          const stockInt = parseInt(itemQty);

          const updatedStock = { stockInt };

          const url = `http://localhost:5000/item/${id}`;

          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedStock),
          })
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
            });
              
        
        }
        else{
            toast.error("Stock Out");
            setStockOut(true);
        }
    }
    
      
    
    return (
      <div>
        <div className="stock-container">
          <div className="manage-stock-card-container">
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
                {stockOut ? (
                  <h6 className="text-danger btn-link">Stock Out</h6>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="manage-stock-container">
            <button
              onClick={() => deliverItem(id)}
              className=" btn btn-info  btn-block"
            >
              Deliver Item
            </button>
            <form onSubmit={handleStockUpdate}>
              <input
                ref={stockRef}
                required
                type="number"
                placeholder="Please Enter New Stock QTY"
              />
              <button className=" btn btn-success  btn-block">Restock</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ManageItem;