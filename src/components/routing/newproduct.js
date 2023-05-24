import { useOutletContext } from "react-router-dom";

function NewProduct () {
    const currentUser = useOutletContext() ; 
    return ( <h1> NEW PRODUCT ADDED BY {currentUser}</h1> );
}

export default  NewProduct;