"use client"
import { Modal } from "react-bootstrap";
import FormEditProduct from "./FormEditProduct";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModal } from "@/features/modal/modalSlice";

const EditModal = () => {

    const {show, action, product} = useSelector(selectModal);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(closeModal());
    
  return (
    <Modal show = {show} onHide = {handleClose} data-bs-theme = "dark">
        <Modal.Header closeButton>
            <Modal.Title className = "text-light">ویرایش محصول</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormEditProduct data = {product} handleClose = {handleClose}  />
        </Modal.Body>
    </Modal>
  )
}

export default EditModal;