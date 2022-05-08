import React from 'react';
import useItems from '../../hooks/useItems';
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from 'react-toastify';
import { useState } from 'react';
import Table from "react-bootstrap/Table";
import './ManageInventories.css';

const ManageInventories = () => {

    const [items,setItems]=useItems();
    
    const handleDeleteItem=(id)=>{
        const confirmDelete=window.confirm("Are you Sure?");
        if(confirmDelete){
            const url = `https://morning-basin-29201.herokuapp.com/item/${id}`;
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
        <Table responsive="sm" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#SL</th>
              <th>Item Name</th>
              <th>Description</th>
              <th>QTY</th>
              <th>Price</th>
              <th>Supplier</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.productName}</td>
                <td>{item.description}</td>
                <td>
                  {item.quantity < 5
                    ? item.quantity + "(Low Stock)"
                    : item.quantity}
                </td>
                <td>{item.price}</td>
                <td>{item.supplierName}</td>
                <td>
                  {
                    <button
                      className="btn "
                      onClick={() => handleDeleteItem(item._id)}
                    >
                      <AiOutlineDelete></AiOutlineDelete>
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* {items.map((item) => (
          <div key={item._id}>
            {" "}
            <h2>
              {item.productName}{" "}
              <button
                className="btn "
                onClick={() => handleDeleteItem(item._id)}
              >
                <MdDeleteForever></MdDeleteForever>
              </button>
            </h2>
          </div>
        ))} */}
        {/* <div className="table">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#SL</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Supplier</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{}</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </div> */}
      </div>
    );
};

export default ManageInventories;