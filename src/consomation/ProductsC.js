import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import ProductC from "./ProductC";
import { deleteProduct, getallProducts } from "../service/api";
function ProductsC() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  //getproducts
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const response = await getallProducts();
    console.log(response);
    setProducts(response.data);
  };
  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);
  const buy = (product) => {
    product.quantity--;
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  const deleteProd = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      await deleteProduct(id);
      getProducts();
    }
  };
  return (
    <Container style={{ marginTop: "30px" }}>
      {visible && (
        <Alert variant="success">
          <Alert.Heading>
            Hey, Welcome To Our Shop <strong> MyStore </strong>{" "}
          </Alert.Heading>
          <p>
            Thank you for choosing our store, we hope you enjoy your shopping
            experience!
          </p>
          <hr />
        </Alert>
      )}
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <ProductC
              product={product}
              buyFunction={buy}
              deleteProd={deleteProd}
            ></ProductC>
          </Col>
        ))}
      </Row>
      {show && (
        <Alert style={{ marginTop: "30px" }} variant="primary">
          You bought an Item
        </Alert>
      )}
    </Container>
  );
}

export default ProductsC;
