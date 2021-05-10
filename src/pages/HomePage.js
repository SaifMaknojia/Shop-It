import React from 'react';
import Header from '../component/Header';
import ProductCard from '../component/ProductCard';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="row gx-5 px-4">
        <div className="col-sm-12 col-md-4 col-lg-3 ">
          <ProductCard />
        </div>
        <div className="col-sm-12 col-md-4  col-lg-3">
          <ProductCard />
        </div>
        <div className="col-sm-12 col-md-4  col-lg-3">
          <ProductCard />
        </div>
        <div className="col-sm-12 col-md-4  col-lg-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
