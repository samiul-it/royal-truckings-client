import React from 'react';
import useItems from '../../hooks/useItems';
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';
import { useState } from 'react';

const ManageInventories = () => {

    const [items,setItems]=useItems();
    
    const handleDeleteItem=(id)=>{
        const confirmDelete=window.confirm("Are you Sure?");
        if(confirmDelete){
            const url = `http://localhost:5000/item/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                toast.info("Item Deleted");
                const remaining=items.filter(item=>item._id !==id);
                setItems(remaining);
            
            }
            
            
            );

        }
        
    }
    return (
      <div>
        Manage inventories Total Items:{items.length}
        {items.map((item) => (
          <div key={item._id}> <h2>{item.productName} <button className='btn ' onClick={()=>handleDeleteItem(item._id)}><MdDeleteForever></MdDeleteForever></button></h2></div>
        ))}
      </div>
    );
};

export default ManageInventories;