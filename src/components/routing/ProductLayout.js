import { useState } from "react";
import { Outlet } from "react-router-dom";

function ProductLayout () {
    const [currentUser, setCurrentUser] = useState(["Will Smith"])
    return ( <Outlet context={currentUser}/>  );
}

export default  ProductLayout;