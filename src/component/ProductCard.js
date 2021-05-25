import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { productList } from '../redux/actions/actions';
import { Link } from 'react-router-dom';

/*  */
const ProductCard = () => {
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();

  //calling data from api
  const fetchProducts = async () => {
    const res = await axios
      .get('https://fakestoreapi.com/products')
      .then(res => res.data)
      .catch(err => console.log(`Err: ${err}`));

    //storing data in redux state
    dispatch(productList(res));
  };

  //storing data in react lifecycle hook
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.map(product => (
        <div className="card mx-2 my-4 custom-card d-flex card-image justify-content-between">
          <Link key={product.id} to={`/shop/${product.id}`}>
            <img
              className="card-img-top card-image p-3"
              style={{ height: '18rem' }}
              src={product.image}
              alt={product.title}
            />
          </Link>
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{product.title}</h5>
            <div>
              <p className="card-text">$ {product.price}</p>
              <Link to="/cart" className="btn btn-primary">
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
