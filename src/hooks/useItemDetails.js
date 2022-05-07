import { useEffect } from 'react';
import { useState } from 'react';

const useItemDetail = (itemId) => {
    

    const [itemDetail, setItemDetail] = useState({});
    useEffect(() => {
      const url = `http://localhost:5000/item/${itemId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setItemDetail(data));
    }, [itemId]);

    return [itemDetail];
};

export default useItemDetail;