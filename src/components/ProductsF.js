import { Row, Col, Card, Button } from "react-bootstrap";
import products from "../products.json"
function ProductsF() {
    return ( <>
    <Row>
          {products.map((p) => (
            <Col md={4}>
              <ProductsF product={p} ></ProductsF>
            </Col>
          ))}
        </Row>
    </> );
}

export default ProductsF;