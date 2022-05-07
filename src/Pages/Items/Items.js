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
      <h1 className="text-success">Items ({items.length})</h1>
      <div className="item-card-container">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      <button onClick={navigateToManageAllItems} className="btn btn-info">Manage All</button>
    </div>
  );
};

export default Items;
