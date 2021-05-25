/* import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { productDetail } from '../redux/actions/actions';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const ProductDetailPage = () => {
  const product = useSelector(state => state.product);


  const { id } = useParams();
  console.log(useParams());
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.data)
      .catch(err => console.log('err', err));
    console.log(dispatch(productDetail(response)));
    dispatch(productDetail(response));
  };
  //storing data in react lifecycle hook
  useEffect(() => {
    fetchProductDetail();
  }, []);

  const { title, price, description, image, category } = product;
  
  console.log(product); 
  return (
    <div key={id} className="container">
      <div className="d-flex flex-wrap my-5 w-100">
        <div className="border d-flex w-50  me-5 align-items-center justify-content-center">
          <img
            style={{ width: '450px' }}
            className="rounded p-5 "
            src={image}
            alt={title}
          />
        </div>

        <div className="d-flex flex-column flex-wrap w-50">
          <div>
            <h3>{title}</h3>
            <h5 className="text-black-50">{category}</h5>
            <p>${price}</p>
            <p>{description}</p>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Control>
          </div>
          <button className="btn btn-primary" style={{ width: '200px' }}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
 */

import React from 'react';
import SingleProduct from '../component/SingleProduct';

const ProductDetailPage = () => {
  return (
    <div className="container">
      <SingleProduct />
    </div>
  );
};

export default ProductDetailPage;
