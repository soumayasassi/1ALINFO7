import { useEffect, useState } from "react";
import products from "../products.json";
import ProductF from "./ProductF";
import { Row, Col, Alert } from "react-bootstrap";
function ProductsF() {
  const [show, setShow] = useState(false);
  
  const buyparent = (p) => {
    p.quantity--;
    console.log(p.quantity)
    setShow(true)
        setTimeout(() =>
          {
            setShow(false)
          },1000
        )
  };

  return (
    <>
      {" "}
      <Row>
        {products.map((p) => (
          <Col md={4}>
            <ProductF product={p} buy={buyparent}></ProductF>
          </Col>
        ))}
      </Row>
     {show && (
           <Alert style={{ marginTop: "30px" }} variant="primary">
             
             You bought an Item 
           </Alert>
         )} 
    </>
  );
}

export default ProductsF;
