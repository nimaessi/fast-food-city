"use client"
import { Modal } from "react-bootstrap";
import FormEditProduct from "./FormEditProduct";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModal } from "@/features/modal/modalSlice";
import FormEditPrice from "./editPrice/FormEditPrice";
import FormEditCategory from "./editCategory/FormEditCategory";

const EditModal = () => {

    const {show, action, product} = useSelector(selectModal);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(closeModal());

    var title = "";
    switch (action) {
      case "title":
        title = "ویرایش محصول"
        break;
      case "category":
        title = "ویرایش دسته بندی"
        break;
      case "price":
        title = "ویرایش  قیمت"
        break;
      default:
        title = " "
    }    
  return (
    <Modal show = {show} onHide = {handleClose} data-bs-theme = "dark">
        <Modal.Header closeButton>
            <Modal.Title className = "text-light">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {action === "title" && <FormEditProduct data = {product} handleClose = {handleClose}  />}
            {action === "price" && <FormEditPrice data = {product} handleClose = {handleClose} />}
            {action === "category" && <FormEditCategory />}
        </Modal.Body>
    </Modal>
  )
}

export default EditModal;