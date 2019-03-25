import React, { Component } from 'react';
import './css-files/header.css';
import Name from './Name';
import CoffeeList from '../components/CoffeeList';
import CustomList from '../components/CustomList';
import SizeIcons from '../components/SizeIcons';
import SugarIcons from '../components/SugarIcons';
import 'animate.css';




    
class nameList extends Component {

    state = {
        value: '',
        animateInput: false,
        animateCoffees: false,
        animateSugar: true,
        listOfCoffees: ["Americano", "Cappuccino", "Cafe Latte", "Espresso", "Flat White", "Cafe Mocha"],
        listOfCustoms: "Choose a size",
        sizeIcons: [{src: require("../Assets/coffee.png")}, {src: require("../Assets/coffee.png")}, {src: require("../Assets/coffee.png")}],
        sugarIcons: require("../Assets/sugar.png"), 
        coffeeClasses: ["small", "medium", "large"],
        showInput: true,
        showCoffee: false,
        showCustom: false,
        showSizes: false,
        showSugar: false,
        mouseOver: false,
        coffeePicked: [],
        coffeeSizes: [],
        sugarAmount: [],
        score: 0,
        addSug: "",
        displaySugars: false,
    }

    handleValueChange = (e) => {
        this.setState({value: e.target.value})
        
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.addName(this.state.value);
        this.setState({value: ''});
        this.setState({animateInput: true})
        this.props.changeTitle(1);
        this.setState({showCoffee: true})
        setTimeout(() => { this.setState({showInput: false})},300)
        
            
            }

     coffeeHandler = (coffeeIndex) => {
        let myCoffee = (this.state.listOfCoffees[coffeeIndex])
        this.state.coffeePicked.push(myCoffee)
        const newCoffee = this.state.coffeePicked; 
        this.setState({coffeePicked: newCoffee})
        this.setState({animateCoffees: true})
        setTimeout(() => { this.setState({showCoffee: false, showCustom: true, showSizes: true})},700)
        this.props.changeTitle(2);
        
        
         
     } 

     mouseover = (sizeIndex) => {
         let mouseState = [...this.state.sizeIcons]
         mouseState[sizeIndex].src = require("../Assets/coffee-selected.png")
         this.setState({sizeIcons: mouseState})
     }

     mouseout = (sizeIndex) => {
         let mouseState = [...this.state.sizeIcons]
         mouseState[sizeIndex].src = require("../Assets/coffee.png")
         this.setState({sizeIcons: mouseState})
     }

     iconHandler = (sizeIndex) => {
        let mySize = this.state.coffeeClasses[sizeIndex];
        this.state.coffeeSizes.push(mySize);
        let newSizeArr = this.state.coffeeSizes;
        this.setState({coffeeSizes: newSizeArr, showSizes: false, listOfCustoms: "Any sugar?", showSugar: true})

     }

     submitSugarHandler = (index) => {
        this.setState({animateSugar: false})
        setTimeout(() => { this.setState(
            {showSugar: false, showCustom: false, showInput: true,
            animateInput: false, animateCoffees: false, animateSugar: true, listOfCustoms: "Choose a size"})},700)
        this.props.changeTitle(0);
        let sugarCount = this.state.sugarAmount;
        sugarCount.push(this.state.score);
        this.setState({sugarAmount: sugarCount});
        this.setState({displaySugars: true})

        
        


     }

     incrementScore = () => {
        this.setState(prevState => ({ score: prevState.score +1
         }))
        if (this.state.score >= 2){
            this.setState({sugarIcons: require("../Assets/danger.png")})

        }
     }
     decrementScore = () => {
         this.setState(prevState => ({
         score: prevState.score -1
          }))
          if (this.state.score <= 1){
            this.setState({sugarIcons: require("../Assets/sugar.png")})

        }
      }

    render(){

        const animateOut = [this.state.animateInput ? "animated zoomOutRight": null]

        
            
        return <div className="namelistblock">

       {this.state.showInput ? <form className={animateOut.join(" ")} onSubmit={this.handleSubmit} >
            <input className="addDrinker" type="text" value={this.state.value} onChange = {this.handleValueChange} placeholder="Add a coffee drinker"/>
            <input className="submitDrinker" type="submit" value="Go"/>
        </form> : null}
        
        
        {this.props.drinkersName.map((myArray, index)=>
            <Name index={this.state.sugarAmount[index]} name={myArray} updateSugar = {`with ${this.state.sugarAmount[index]} sugars` }coffeeChoice = {this.state.coffeePicked[index]} coffeeSize={this.state.coffeeSizes[index]} score={this.state.score} /> 
            )}

        {this.state.showCustom ?  
            <CustomList customtype={this.state.listOfCustoms} display={this.state.animateSugar} /> 
                     : null}

        <div className="iconBox">
            {this.state.showSizes ? this.state.sizeIcons.map((iconArr, index) => 
            <SizeIcons 
            cssClass={this.state.coffeeClasses[index]}
            src={iconArr.src}
            onMouseSrc = {() => this.mouseover(index)}
            offMouseSrc={() => this.mouseout(index)}
            click={() => this.iconHandler(index)}
            display={this.state.showSizes}
            /> ) 
                        : null}

             {this.state.showSugar ?
             <SugarIcons
             src={this.state.sugarIcons}
             display={this.state.animateSugar}
             click={() => this.submitSugarHandler()}
             incr={()=> this.incrementScore()}
             decr={()=> this.decrementScore()}
             score={this.state.score}
             />   :  null}
        </div>
        
        


        {this.state.showCoffee ?  this.state.listOfCoffees.map((coffeeArr, index)=>
        <CoffeeList coffeetype={coffeeArr} coffeepicked = {() => this.coffeeHandler(index)} display={this.state.animateCoffees}/> 
            ) : null}

            

        </div>
    }
    
      
    }




export default nameList;