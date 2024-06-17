"use client"
import { Modal } from "react-bootstrap";
import FormEditProduct from "./FormEditProduct";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModal } from "@/features/modal/modalSlice";
import FormEditPrice from "./editPrice/FormEditPrice";

const EditModal = () => {

    const {show, action, product} = useSelector(selectModal);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(closeModal());
    const title = action === "title" ? "ویرایش محصول" : "ویرایش قیمت";
    
  return (
    <Modal show = {show} onHide = {handleClose} data-bs-theme = "dark">
        <Modal.Header closeButton>
            <Modal.Title className = "text-light">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {action === "title" && <FormEditProduct data = {product} handleClose = {handleClose}  />}
            {action === "price" && <FormEditPrice data = {product} handleClose = {handleClose} />}
        </Modal.Body>
    </Modal>
  )
}

export default EditModal;