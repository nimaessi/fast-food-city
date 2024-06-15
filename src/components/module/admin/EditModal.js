"use client"
import { Modal } from "react-bootstrap";
import FormEditProduct from "./FormEditProduct";

const EditModal = ({showModal, setShowModal, product}) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  return (
    <Modal show = {showModal} onHide = {handleClose} data-bs-theme = "dark">
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