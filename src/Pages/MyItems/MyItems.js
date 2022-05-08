import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import useItems from '../../hooks/useItems';
import { useEffect } from 'react';
import './Myitems.css';
import axios from "axios";

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [displayMyItems, setDisplayMyItems] = useState([]);
    const [items,setItems]=useItems();
    

    useEffect(()=>{
        const loadMyItems = async() => {
          const myItems = items.filter((item) => item.userEmail == user.email);
          setDisplayMyItems(myItems);


          const url = `http://localhost:5000/myitems?email=${user.email}`;

            try{
                const {data} = await axios.get(url,{
                  headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                  }
                });
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                }
            }
        };
        loadMyItems();

    },[items])


    return (
      <div>
        Your Items:{displayMyItems.length}
        <div className="display-my-items">
          {displayMyItems.map((displayMyItem) => (
            <div key={displayMyItem._id} className="card-container">
              <div className="card-img">
                <img src={displayMyItem.img} alt="product-img" />
              </div>
              <div className="card-description">
                <h5>{displayMyItem.productName}</h5>
                <h3 className="text-danger">${displayMyItem.price}</h3>
                <p>{displayMyItem.description}</p>
                <p>Supplier: {displayMyItem.supplierName}</p>
                <h6>Stock:{displayMyItem.quantity}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyItems;