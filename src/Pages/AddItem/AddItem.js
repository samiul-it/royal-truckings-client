import React, { useRef } from 'react';
import './AddItem.css';
import { useEffect } from 'react';


const AddItem = () => {

    const productNameRef=useRef('');
    const imgUrlRef = useRef("");
    const descriptionRef=useRef('');
    const quantityRef=useRef('');
    const supplierNameRef=useRef('');
    const priceRef=useRef('');

    const handleFormSubmit=(e)=>{
        e.preventDefault();

        const name=productNameRef.current.value;
        const imgUrl=imgUrlRef.current.value;
        const description=descriptionRef.current.value;
        const quantity=quantityRef.current.value;
        const supplier=supplierNameRef.current.value;
        const price=priceRef.current.value;

        const data={name,imgUrl,description,quantity,supplier,price};
        console.log(data);

        const url="http://localhost:5000/item/";
        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result));


       

    }

    return (
      <div>
        Please Add an Item
        <div className="login-container">
          <form onSubmit={handleFormSubmit}>
            <div className="form-fields mx-auto">
              <input
                ref={productNameRef}
                required
                type="productName"
                placeholder="Enter Your Product Name"
              />
              <input
                ref={imgUrlRef}
                type="text"
                required
                placeholder="Please enter Image URL"
              />
              <input
                ref={descriptionRef}
                type="text"
                required
                placeholder="Description"
              />
              <input
                ref={quantityRef}
                type="number"
                required
                placeholder="Please enter Quantity"
              />
              <input
                ref={supplierNameRef}
                type="text"
                required
                placeholder="Please enter Supplier Name"
              />
              <input
                ref={priceRef}
                type="number"
                required
                placeholder="Please enter Price"
              />
              <button className="btn btn-success">Add Item</button>
            </div>
          </form>
          <div className="form-fields mx-auto"></div>
        </div>
      </div>
    );
};

export default AddItem;