import logo from "./logo.svg";
import "./App.css";
import Products from './components/Products';

function App() {
  const expression = <p> 1 + 1 = {1 + 1} </p>;
  var nom = <h2> Foulen </h2>;
  var prenom = <h2> Ben Foulen </h2>;
  const photo = (
    <img src="logo192.png" alt="reactlogo" width="100px" height="100px" />
  );
  const user = { prenom: "Foulen", nom: "Ben Foulen" };
  var myStyle = { fontSize: 100, color: "#FF0000" };
  const numbers = [7, 12, 25, 4, 5]
  const max = numbers.reduce((a, b) => b > a ? b : a)
  return (
    <div className="App">
      {/* {expression}
      {nom}--{prenom}
      {photo} <br></br>
      {user.nom}--{user.prenom}
      <h1 style={myStyle}>Bonjour</h1>
      <span className="CSS-span">CSS</span>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
      <h2> Maximum : {max} </h2>  */}
      {/* <Welcome nom={name}></Welcome> */}
      <Products/>
    </div>
  );
}

export default App;
