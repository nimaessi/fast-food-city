"use client"
import { Table } from "react-bootstrap";

const DataTable = () => {
  return (
   <Table striped bordered responsive variant = "dark" className = "mt-5">
        <thead>
            <tr>
                <th>شماره</th>
                <th>نام </th>
                <th>لینک صفحه</th>
                <th>عکس</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
        </tbody>
   </Table> 
  )
}

export default DataTable;