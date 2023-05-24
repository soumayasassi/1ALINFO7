import { useState } from "react";

function WelcomeF() {
  const [txt, setTxt] = useState("bjr");

  return (
    <div>
      Welcome fonctionelle
      {txt} 
    </div>
  );
}

export default WelcomeF;
