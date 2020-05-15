import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalProduct from "./ModalProduct";
import axios from "axios";

const urlApiCourses = "http://localhost:4000/api/courses/";

const getProduct = async (id) => {
  let product = {};
  await axios({
    method: "get",
    url: urlApiCourses + id,
  })
    .then((response) => {
      product = response.data.data[0];
    })
    .catch((error) => {
      console.log(error);
    });
  return product;
};

export default function ShowModalProduct(props) {
  const [modalShow, setModalShow] = useState(false);
  const { id } = props;
  const [productById, setProductById] = useState({});
  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          setModalShow(true);
          getProduct(id).then((result) => setProductById(result));
        }}
      >
        Product
      </Button>
      <ModalProduct
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={productById}
      />
    </div>
  );
}
