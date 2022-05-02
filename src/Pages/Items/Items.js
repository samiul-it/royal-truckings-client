import React from "react";
import useItems from "./../../hooks/useItems";
import Item from "./../Item/Item";
import './Items.css';

const Items = () => {
  const [items, setItems] = useItems([]);
  return (
    <div className="item-container-parent">
      <h1 className="text-success">Items ({items.length})</h1>
      <div className="item-card-container">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
