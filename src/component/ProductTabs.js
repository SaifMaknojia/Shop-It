import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ElectronicCategory from './ElectronicCategory';
import MensCategory from './MensCategory';
import JewelleryCagtegory from './JewelleryCagtegory';
import WomenCategory from './WomenCategory';
import { Link } from 'react-router-dom';

const ProductTabs = () => {
  const style = {
    textDecoration: 'none',
    border: 'none'
  };

  return (
    <Tabs className="mt-3 ">
      <TabList
        style={style}
        className="d-flex  overflow-scroll justify-content-evenly"
      >
        <Tab>Electronic's</Tab>
        <Tab>Jewelleries's</Tab>
        <Tab>Men's</Tab>
        <Tab>Women's</Tab>
        <Link style={{ color: '#212529' }} to="/shop">
          <Tab>View All</Tab>
        </Link>
      </TabList>

      <TabPanel className="d-flex justify-content-center justify-content-md-start   flex-wrap">
        <ElectronicCategory />
      </TabPanel>
      <TabPanel className="d-flex justify-content-center   flex-wrap">
        <JewelleryCagtegory />
      </TabPanel>
      <TabPanel className="d-flex justify-content-center   flex-wrap">
        <MensCategory />
      </TabPanel>
      <TabPanel className="d-flex justify-content-center   flex-wrap">
        <WomenCategory />
      </TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
  );
};

export default ProductTabs;
