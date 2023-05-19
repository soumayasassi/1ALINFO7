import { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    //this.state = this.props.nom
  }
  changestate = () => {
    this.setState({
        txt : "Bonjour" , 
      count: this.state.count + 1,
      departs :[...this.state.departs , {id : 4, nom : 'Télécom'}]
    });
  };
  state = {
    nom : this.props.nom  , 
    txt: "montxt",
    count: 1,
    departs: [
      { id: 1, nom: "Informatique" },
      { id: 2, nom: "Génie Civil" },
      { id: 3, nom: "Génie Mécanique" },
    ],
  };

  render() {
    return (
      <div>
        <h2> txt :{this.state.txt} </h2> 
        <h2> count :  {this.state.count}</h2>
        <button onClick={this.changestate}> Incrémenter</button>
        {this.state.departs.map((elt, i) => (
          <li key={i}>
            {elt.id}--{elt.nom}
          </li>
        ))}
      </div>
    );
  }
}

export default Welcome;
