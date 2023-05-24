import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
function ProductF(props) {
  const [product, setProduct] = useState(props.product);
  const myclass = product.like > 5 ? "bestProduct" : "text-center";
  const addLike = () => {
    setProduct({ ...product, like: product.like + 1 });
  };
  return (
    <Card style={{ width: "18rem" }} className={myclass} border="secondary">
      <Card.Header>
        <Card.Img
          variant="top"
          src={require("../assets/images/" + props.product.img)}
          alt="Product Img"
          height={200}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title> {product.name}</Card.Title>
        <Card.Text>Quantity:{product.quantity} </Card.Text>
        <Card.Text> Price : {product.price} dt </Card.Text>
        <Card.Text>Like : {product.like} </Card.Text>
        <Row>
          <Col md={6}>
            <Button variant="primary" onClick={addLike}>
              Like
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="info"
              disabled={product.quantity === 0}
              onClick={() => props.buy(product)}
            >
              {" "}
              Buy
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProductF;
