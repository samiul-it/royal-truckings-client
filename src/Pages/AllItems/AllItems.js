import React from "react";
import useItems from "./../../hooks/useItems";
import Item from "./../Item/Item";
import { useNavigate } from "react-router-dom";

const AllItems = () => {
  const [items] = useItems([]);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };
  return (
    <div className="item-container-parent">
      <h1 className="text-success">Items ({items.length})</h1>
      <div className="item-card-container">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      <button onClick={navigateToHome} className="btn btn-warning">
        Back Home
      </button>
    </div>
  );
};

export default AllItems;
