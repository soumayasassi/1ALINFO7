import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProductReducer } from "../redux/ProductsSlice";
import { useDispatch } from "react-redux";
import { increment } from "../redux/cartSlices";

function ProductC(props) {
  const [product, setProduct] = useState(props.product);
  const dispatch = useDispatch()
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
        <Card.Title>
          <Link to={`/products/${product.id}/${product.like}`}>
            {product.name}
          </Link>
        </Card.Title>
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
              onClick={() => props.buyFunction(product)}
            >
              Buy
            </Button>
            <Button variant="success">
              <Link
                to={`/products/update/${product.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Update Product{" "}
              </Link>
            </Button>
            <Button
              variant="danger"
              onClick={() => dispatch(deleteProductReducer(product.id))}
            >
              Delete Product
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={12}>
            <Button variant="success" onClick={() => dispatch(increment(product))}>
              ADD TO CART +
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProductC;
