import { Row, Col, Card, Button, Alert } from "react-bootstrap";
import products from "../products.json"
import { useEffect, useState } from "react";
function ProductsF() {
    const [show, setShow] = useState(false)
    const [visible, setVisible] = useState(false)
     const buy = (product) =>
     {
product.quantity -- ; 
setShow(true)
setTimeout(() => {
    setShow(false)
  }, 2000);
     }

     useEffect(()=> {
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
          }, 3000);
     },[])
    return ( <>
     {visible && <Alert> Hey Welcome ...</Alert>}
    <Row>
          {products.map((p) => (
            <Col md={4}>
              <ProductsF product={p} buyFunction={buy} ></ProductsF>
            </Col>
          ))}
        </Row>
        {show && <Alert>You Bought an item </Alert>}
       
    </> );
}

export default ProductsF;