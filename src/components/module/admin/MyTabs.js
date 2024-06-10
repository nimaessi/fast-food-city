"use client"
import { Tabs, Tab } from 'react-bootstrap';
import DataTableCategory from './DataTable';

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
        Tab content for Profile
      </Tab>
    </Tabs>
  )
}

export default MyTabs;