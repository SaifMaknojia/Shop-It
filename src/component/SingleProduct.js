import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { productDetail } from '../redux/actions/actions';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const product = useSelector(state => state.product);

  const { id } = useParams();
  const dispatch = useDispatch();

  /*   const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.data)
      .catch(err => console.log('err', err));
    console.log(dispatch(productDetail(response)));
    dispatch(productDetail(response));
  }; */
  //storing data in react lifecycle hook
  useEffect(() => {
    const fetchProductDetail = async () => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.data)
        .catch(err => console.log('err', err));

      dispatch(productDetail(response));
    };

    fetchProductDetail();
  }, []);

  const { title, price, description, image, category } = product;

  return (
    <div className="my-5 d-lg-flex justify-content-between" key={id}>
      <div className="d-flex justify-content-center">
        <img
          style={{ height: '400px' }}
          src={image}
          alt={title}
          className="mb-5 me-3 p-3"
        />
      </div>
      <div className="ms-5 d-flex flex-column ">
        <h3 className="mt-3 fs-1">{title}</h3>
        <h5 className="mt-3 fs-3 text-capitalize text-muted">{category}</h5>
        <p className="mt-3 fs-2 text-success ">${price}</p>
        <p className="mt-3 fs-5">{description}</p>
        <div className=" d-flex mt-3 w-25 align-items-center">
          <label>Quantity:&nbsp; </label>
          <input className="ms-1 fs-4 border border-2" type="text" />
        </div>
        <button className="btn btn-primary m-3 w-50  fs-4">Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
