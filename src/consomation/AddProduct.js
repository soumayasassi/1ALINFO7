import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../service/api";
import { useDispatch } from "react-redux";
import { addProductReducer } from "../redux/ProductsSlice";
function AddProduct() {
  const navigate = useNavigate();
  const [newproduct, setNewProduct] = useState({
    name: "",
    price: 0,
    img: "",
    like: 0,
    quantity: 0,
    description: "",
  });
  const { name, price, img, like, quantity, description } = newproduct;

  const dispatch = useDispatch()


  const handleChange = (e) => {
    setNewProduct({ ...newproduct, [e.target.name]: e.target.value });
  };
  const handleLoad = (e) => {
    setNewProduct({ ...newproduct, [e.target.name]: e.target.files[0].name });
  };

  return (
    <>
      <h2>Add Product</h2>
      <Form style={{ marginLeft: "50px" }}>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "50%" }}
            onChange={(e) => handleChange(e)}
            placeholder="Enter a Name"
            name="name"
            value={name}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "50%" }}
            onChange={(e) => handleChange(e)}
            placeholder="Enter a Description"
            name="description"
            value={description}
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            style={{ width: "50%" }}
            onChange={(e) => handleChange(e)}
            placeholder="Enter a Price"
            name="price"
            value={price}
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            type="number"
            style={{ width: "50%" }}
            onChange={(e) => handleChange(e)}
            placeholder="Enter a  Quantity"
            name="quantity"
            value={quantity}
          />
        </Form.Group>

        <Form.Group controlId="formImg">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="file"
            style={{ width: "50%" }}
            onChange={(e) => handleLoad(e)}
            name="img"
          />
        </Form.Group>
        <br></br>
        <Button variant="primary"  onClick={() => dispatch(addProductReducer(newproduct))}>
          Add Product
        </Button>
        
        <Button onClick={() => navigate("/products/list")} variant="secondary">
          Back To Products
        </Button>
      </Form>
    </>
  );
}

export default AddProduct;
