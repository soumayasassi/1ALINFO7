import React from 'react';
import Product from './Product';
import products from "../products.json" ; 
import {Row, Col , Alert} from "react-bootstrap"
class Products extends React.Component {
    state = { 
        show : false ,
     } 
   
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
        }, 1000);
      };
    render() { 
        return (<>
       <Row>
       {products.map((p) => (
          <Col md={4}>
           <Product product={p} buy={this.buyparent}></Product>
          </Col>
        ))}
       </Row>
       {this.state.show && (
          <Alert style={{ marginTop: "30px" }} variant="primary">
            
            You bought an Item 
          </Alert>
        )}
        </>);
    }
}
 
export default Products;