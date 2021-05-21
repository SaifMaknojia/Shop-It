import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { productCategory } from '../redux/actions/actions';

const NavCard = () => {
  const style = {
    height: '250px',
    width: '18rem',
    maxWidth: '30rem',
    padding: '25px',
    margin: '25px'
  };

  const sortedProduct = useSelector(state => state.category);

  const dispatch = useDispatch();

  const fetchCategory = async () => {
    const result = await axios
      .get('https://fakestoreapi.com/products/categories')
      .then(res => res.data)
      .catch(err => console.log('err:', err));
    dispatch(productCategory(result));
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <>
      {Object.values(sortedProduct).map((item, i) => (
        <div
          key={i}
          className="nav-card border flex-grow d-flex flex-column justify-content-evenly"
          style={style}
        >
          <h2>{item.charAt(0).toUpperCase() + item.slice(1)}</h2>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      ))}
    </>
  );
};

export default NavCard;
