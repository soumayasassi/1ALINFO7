import { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import img from "../assets/images/placeholder.jpg";
class Product extends Component {
  constructor(props) {
    super(props);
    //this.state = this.props.nom
  }
  state = {
    product: this.props.product,
  };
  addLike = () => {
    this.setState({
      product: { ...this.state.product, like: this.state.product.like + 1 },
    });
  };

  render() {
    return (
      <Card
        style={{ width: "18rem" }}
        className="text-center"
        border="secondary"
      >
        <Card.Header>
          <Card.Img
            variant="top"
            src={require("../assets/images/" + this.props.product.img)}
            alt="Product Img"
            height={200}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title> {this.state.product.name}</Card.Title>
          <Card.Text>Quantity:{this.state.product.quantity} </Card.Text>
          <Card.Text> Price : {this.state.product.price} dt </Card.Text>
          <Card.Text>Like : {this.state.product.like} </Card.Text>
          <Row>
            <Col md={6}>
              <Button variant="primary" onClick={this.addLike}>
                {" "}
                Like
              </Button>
            </Col>
            <Col md={6}>
              <Button
                variant="info"
                disabled={this.state.product.quantity === 0}
                onClick={() => this.props.buy(this.state.product)}
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
}

export default Product;
