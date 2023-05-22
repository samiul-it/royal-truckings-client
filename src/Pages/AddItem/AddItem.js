import React, { useRef } from 'react';
import './AddItem.css';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';


const AddItem = () => {

    const [user, loading, error] = useAuthState(auth);

    

    const navigate=useNavigate();
    const navigateToItems=()=>{
        navigate('/items');
    }

    const productNameRef=useRef('');
    const imgUrlRef = useRef("");
    const descriptionRef=useRef('');
    const quantityRef=useRef('');
    const supplierNameRef=useRef('');
    const priceRef=useRef('');

    const handleFormSubmit=(e)=>{
        e.preventDefault();

        const productName=productNameRef.current.value;
        const img=imgUrlRef.current.value;
        const description=descriptionRef.current.value;
        const quantity=quantityRef.current.value;
        const supplierName=supplierNameRef.current.value;
        const price=priceRef.current.value;
        const userEmail=user.email;

        const data={productName,img,description,quantity,supplierName,price,userEmail};
        console.log(data);

        const url="https://royal-trucking-server.onrender.com/item/";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result))
          .then(toast.success("Success!Item Added"));
        
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
                title="Post the Image link here"
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