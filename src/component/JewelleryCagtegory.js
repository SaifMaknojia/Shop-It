import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JewelleryCagtegory = () => {
  const [items, setItems] = useState([]);

  const fetchProducts = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/category/jewelery`)
      .then(res => res.data)
      .catch(err => console.log(`Err: ${err}`));

    setItems(res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {items && (
        <>
          {items.map(name => (
            <div
              key={name.id}
              className="card mx-2 my-4 custom-card d-flex card-image justify-content-between"
            >
              <img
                className="card-img-top card-image p-3"
                style={{ height: '10rem' }}
                src={name.image}
                alt={name.title}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{name.title}</h5>
                <div>
                  <p className="card-text">$ {name.price}</p>
                  <button className="btn btn-primary">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default JewelleryCagtegory;
