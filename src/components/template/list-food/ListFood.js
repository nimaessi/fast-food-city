import DetailMenu from "@/module/DetailMenu";
import HeaderListFood from "@/module/HeaderListFood";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const ListFood = ({ data }) => {
  return (
    <>
     <HeaderListFood data = {data} />
     <DetailMenu />
    </>
  )
}

export default ListFood;