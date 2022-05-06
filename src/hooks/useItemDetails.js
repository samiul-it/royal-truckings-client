import { useEffect } from 'react';
import { useState } from 'react';

const useItemDetail = (itemId) => {
    const [itemDetail,setItemDetail]=useState({})

    useEffect( ()=>{
        fetch("items.json")
        .then(res=>res.json())
        .then(data=>setItemDetail(data))
    },[itemId])

    return [itemDetail];
};

export default useItemDetail;