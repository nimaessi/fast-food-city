"use client"
import { Container, ListGroup, Badge } from "react-bootstrap";
import { sp } from "@/utils/replaceNumber";
const DetailMenu = () => {
  return (
    <Container className = "bg-dark">
        <ListGroup
            data-bs-theme = "dark"
            className = "mt-4" 
            as = "ol" >
        {[...new Array(10)].map((_,index) => (
            <ListGroup.Item
                as = "li"
                key = {index}
                className = "d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto fs-12">
                    <div className="fw-bold fs-5">بندری</div>
                    نان زاپاتا + 300گرم بندری + گوجه + خیارشور
                </div>
                <div className = "d-flex flex-column">
                    <Badge bg = "warning" className = "text-dark" pill>نرمال {sp(50000)}</Badge>
                    <Badge bg = "warning" className = "text-dark mt-1" pill> دونفره  {sp(270000)}</Badge>
                    <Badge bg = "warning" className = "text-dark mt-1" pill>خانواده {sp(253000)}</Badge>
                </div>
            </ListGroup.Item>
        ))}
        </ListGroup>
    </Container>
  )
}

export default DetailMenu;