"use client"
import { Tabs, Tab } from 'react-bootstrap';
import DataTableCategory from './DataTable';
import DataTableProducts from './DataTableProducts';
import { useState } from 'react';

const MyTabs = () => {
  const [category, setCategory] = useState([]);
  return (
    <Tabs 
        justify 
        variant = "tabs"
        data-bs-theme = "dark"
        className = "mt-5"  
        defaultActiveKey = "category" >
       <Tab eventKey = "category" title = "دسته بندی">
          <DataTableCategory category = {category} setCategory = {setCategory}  />
      </Tab>
      <Tab eventKey = "products" title = "محصولات">
        <DataTableProducts category = {category} />
      </Tab>
    </Tabs>
  )
}

export default MyTabs;