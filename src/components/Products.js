import React from "react";
import Product from "./Product";
import products from "../products.json";
import { Row, Col, Alert } from "react-bootstrap";
class Products extends React.Component {
  state = {
    show: false,
    visible: false,
  };

  buyparent = (product) => {
    product.quantity--;
    console.log(product.quantity);
    this.setState({
      show: true,
    });

    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 2000);
  };
  componentDidMount = () => {
    this.setState({
      visible: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
      });
    }, 3000);
  };
  componentDidUpdate= ()=>
  {console.log("component updated")}
  render() {
    return (
      <>
        {this.state.visible && <Alert> Hey Welcome ...</Alert>}
        <Row>
          {products.map((p) => (
            <Col md={4}>
              <Product product={p} buy={this.buyparent}></Product>
            </Col>
          ))}
        </Row>
        {this.state.show && <Alert>You Bought an item </Alert>}
      </>
    );
  }
}

export default Products;
