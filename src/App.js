import React, { Component } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import NameList from './components/NameList';
import './components/css-files/header.css';

import './App.css';

class App extends Component {

state = {
  title: "Who wants coffee?",
  names: [],
  animate: false,
  deciding: "Click to decide who buys"
}

titleHandler = (index) => {
  if(index === 0){
    this.setState({title: "Who wants coffee?"})
}else if (index === 1){
    this.setState({title: "What coffee do you need?"})
  } else if (index === 2){
    this.setState({title: "How do you want it?"})
  } else {
    return;
  }
}

  
addNameHandler = (name) => {
  
  let newNames = this.state.names.concat(name);
  this.setState({names: newNames});
  

}
 
decideBuyer = () => {
  this.setState({deciding: "1"})
  let chosenOne = Math.floor(Math.random() * this.state.names.length);
  setTimeout(() => { this.setState({deciding: "2"})}, 1000)
  setTimeout(() => { this.setState({deciding: "3"})}, 2000)
  setTimeout(() => { this.setState({deciding: this.state.names[chosenOne]})}, 3000)
  
}

  render() {


    return (
      <div className="App">
        <Header click={this.state.animate}/>
        <Title title={this.state.title} />
        <NameList addName = {this.addNameHandler} drinkersName={this.state.names} changeTitle={this.titleHandler}/>
      
        {this.state.names.length >= 2 ? <button onClick={() => this.decideBuyer()}className="buyer">{this.state.deciding}</button> : null}
          
        
      </div>
    );
  }
}

export default App;
