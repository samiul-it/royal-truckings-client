import React from 'react';
import './Item.css';


const Item = ({item}) => {
    const {productName,img,price,description,quantity,supplierName}=item;
    

    const navigateToManageItem=(oroductName)=>{
      console.log("Clicked",productName);
      
    }
    return (
      <>
        <div className="card-container">
          <div className="card-img">
            <img src={img} alt="product-img" />
          </div>
          <div className="card-description">
            <h5>{productName}</h5>
            <h3 className="text-danger">${price}</h3>
            <p>
              {description.length >= 100
                ? description.slice(0, 100).concat("...")
                : description}
            </p>
            <p>Supplier: {supplierName}</p>
            <h6>Stock:{quantity}</h6>
          </div>
          <button onClick={navigateToManageItem} className=" btn btn-danger  btn-block">
            Manage Item
          </button>
        </div>
      </>
    );
};

export default Item;