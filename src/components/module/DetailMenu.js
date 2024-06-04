"use client"
import { Container, ListGroup, Badge } from "react-bootstrap";
import { sp, e2p } from "@/utils/replaceNumber";
import { dictionary } from "@/constants/dictionary";
const DetailMenu = ({ products }) => {
  return (
    <Container className = "bg-dark">
        <ListGroup
            data-bs-theme = "dark"
            className = "mt-4" 
            as = "ol" >
        {products.map((product, index) => (
            <ListGroup.Item
                as = "li"
                key = {product.id}
                className = "d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto fs-12">
                    <div className="fw-bold fs-5">{product.title}</div>
                    {e2p(product.details)}
                </div>
                <div className = "d-flex flex-column">
                    {product.prices.map((price,index) => (
                        <Badge key = {index} bg = "warning" className = "text-dark mt-1" pill>
                            {dictionary[price.size]} {sp(price.price)}
                        </Badge>
                    ))}
                </div>
            </ListGroup.Item>
        ))}
        </ListGroup>
    </Container>
  )
}

export default DetailMenu;