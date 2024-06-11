"use client"
import { Tabs, Tab } from 'react-bootstrap';
import DataTableCategory from './DataTable';
import DataTableProducts from './DataTableProducts';

const MyTabs = () => {
  return (
    <Tabs 
        justify 
        variant = "tabs"
        data-bs-theme = "dark"
        className = "mt-5"  
        defaultActiveKey = "category" >
       <Tab eventKey = "category" title = "دسته بندی">
          <DataTableCategory />
      </Tab>
      <Tab eventKey = "products" title = "محصولات">
        <DataTableProducts />
      </Tab>
    </Tabs>
  )
}

export default MyTabs;