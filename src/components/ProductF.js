import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
function ProductF (props) {
    const [product,setProduct] = useState(props.product)
    const addLike = () => 
    {
        
    }
    return (<Card
        style={{ width: "18rem" }}
        className="text-center"
        border="secondary"
      >
        <Card.Header>
          <Card.Img
            variant="top"
            src={require("../assets/images/" + product.img)}
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
                {" "}
                Like
              </Button>
            </Col>
            <Col md={6}>
              <Button
                variant="info"
                
                
              >
                {" "}
                Buy
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>  );
}

export default ProductF ;