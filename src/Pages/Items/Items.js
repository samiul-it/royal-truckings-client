import React from "react";
import useItems from "./../../hooks/useItems";
import Item from "./../Item/Item";
import './Items.css';
import { useNavigate } from 'react-router-dom';

const Items = () => {
  const [items] = useItems([]);
  const navigate=useNavigate();
  const navigateToManageAllItems=()=>{
    navigate('/items');
  }
  return (
    <div className="item-container-parent">
      <h1 className="text-success">Items (6)</h1>
      <div className="item-card-container">
        {items.slice(0,6).map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      
    </div>
  );
};

export default Items;
