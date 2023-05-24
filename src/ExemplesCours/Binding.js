
import React, { Component } from 'react';
class Binding extends Component {
  constructor(props) {
    super(props);
this.state = {
      numOfClicks: 0
    };
    
  }
handleClick =  () =>{
    console.log('From handleClick()', this);
    
    this.setState({numOfClicks: this.state.numOfClicks + 1});
  }
  //undefined

  /**
   * 
   *soit on utilise une fct fléchée soit on utilise bind au niveau du constructor
   */
  
render() {
    console.log('From render()', this);
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
        <p>I  Clicked = {this.state.numOfClicks} Times</p>
      </div>
    )
  }
}
export default Binding;