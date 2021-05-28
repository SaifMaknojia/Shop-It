import React from 'react';
import axios from 'axios';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ElectronicCategory from './ElectronicCategory';
import MensCategory from './MensCategory';
import JewelleryCagtegory from './JewelleryCagtegory';
import WomenCategory from './WomenCategory';

const ProductTabs = () => {
  //call for categories
  /* const category = useSelector(state => state.allProducts.productCategory);
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then(res => res.data)
      .catch(err => console.log(`Error is : ${err}`));

    dispatch(productCategory(res));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // another api call for category item
  const itemInCategory = useSelector(
    state => state.allProducts.productCategoryItem
  );
  const dispatchItem = useDispatch();

  const anotherFetchCategory = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/category/men's clothing`)
      .catch(err => console.log(`Error is : ${err}`));
    dispatchItem(productCategoryItem(res.data));
  };

  useEffect(() => {
    anotherFetchCategory();
  }, []);
 */

  const style = {
    textDecoration: 'none',
    border: 'none'
  };

  const tab = {
    border: 'none'
  };

  return (
    <Tabs className="mt-5">
      <TabList style={style} className="d-flex justify-content-evenly">
        <Tab>Electronic's</Tab>
        <Tab>Jewelleries's</Tab>
        <Tab>Men's</Tab>
        <Tab>Women's</Tab>
      </TabList>
      <TabPanel className="d-flex justify-content-center flex-wrap">
        <ElectronicCategory />
      </TabPanel>
      <TabPanel className="d-flex justify-content-center flex-wrap">
        <JewelleryCagtegory />
      </TabPanel>
      <TabPanel className="d-flex justify-content-center flex-wrap">
        <MensCategory />
      </TabPanel>
      <TabPanel className="d-flex justify-content-center flex-wrap">
        <WomenCategory />
      </TabPanel>
    </Tabs>
  );
};

export default ProductTabs;
