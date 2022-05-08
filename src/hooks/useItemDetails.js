import { useEffect } from 'react';
import { useState } from 'react';

const useItemDetail = (itemId) => {
    

    const [itemDetail, setItemDetail] = useState({});
    useEffect(() => {
      const url = `https://morning-basin-29201.herokuapp.com/item/${itemId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setItemDetail(data));
    }, [itemId]);

    return [itemDetail];
};

export default useItemDetail;