import React, {Component} from "react";
import './BurgerStyle.css'
let p = 0;
function pinc()
{
    p = p+3;
}
function pdec(){
    p = p-3;
}

export default class Burger extends Component{
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0,
        
    }

     addRemoveIngredient = (action, ingredient) => {
         let{
             lettuce,
             tomato,
             cheese,
             meat,
             
             } = this.state;
            //   let p;
             let stateValue;
             switch(ingredient){
                 case 'lettuce':{
                     
                     stateValue = lettuce;
                     break;
                 }
                 case 'tomato':{
                    
                    stateValue = tomato;
                    break;
                }
                case 'cheese':{
                    
                    stateValue = cheese;
                    break;
                }
                case 'meat':{
                   
                    stateValue = meat;
                    break;
                }
                default: break;
             }
             if(action === 'add'){
                 pinc();
                 stateValue = stateValue + 1;
             }
             else{
                 
                stateValue = stateValue - 1;
                if(stateValue>=0){pdec();}
             }
             this.setState({
                 [ingredient]: stateValue>=0 ? stateValue:0
             }); }
             burgerContent = () => {
                let{
                    lettuce,
                    tomato,
                    cheese,
                    meat,
                    p
                    } = this.state;
                    
                    
                    let burger = [];
                    //outputting the lettce 
                    for(let i = 0; i<lettuce; i++){
                        burger.push(<div key={burger.length} className="lettuceSide">
                        </div>);
                    }
                    
                    for(let i = 0; i<tomato; i++){
                        burger.push(<div key={burger.length} className="tomatoSide">
                        </div>);
                    }
                    for(let i = 0; i<cheese; i++){
                        burger.push(<div key={burger.length} className="cheeseSide">
                        </div>);
                    }
                    for(let i = 0; i<meat; i++){
                        burger.push(<div key={burger.length} className="meatSide">
                        </div>);
                    }
                    return burger;
                    
             }
             
    
    render(){
        return (
               <>

                  <div className="scroll-bg">
                  <div className="scroll-div">
                  <div className="scroll-object">
                  
                  <div className="burgeringredients">
                      <div className="topSide"></div>
                          <div> {this.burgerContent()}</div>
                      <div className="bottomSide"></div>
                  </div>
                  </div>
                  </div>
                  </div>
                         
                  <div className="ingredientsBolck">
                     <p>Price = ${p}</p>
                     <br></br>
                     <p>Lettuce</p>
                     <div className="ingrBtns">
                     <button onClick={() => this.addRemoveIngredient('add', 'lettuce')} className="ingrBtn">Add</button>
                     <button onClick={() => this.addRemoveIngredient('remove', 'lettuce')} className="ingrBtn">Remove</button>
                     
                    </div>
                    <p>cheese</p>
                    <div className="ingrBtns">
                     <button onClick={() => this.addRemoveIngredient('add', 'cheese')} className="ingrBtn">Add</button>
                     <button onClick={() => this.addRemoveIngredient('remove', 'cheese')} className="ingrBtn">Remove</button>
                     
                    </div>
                    <p>tomato</p>
                    <div className="ingrBtns">
                     <button onClick={() => this.addRemoveIngredient('add', 'tomato')} className="ingrBtn">Add</button>
                     <button onClick={() => this.addRemoveIngredient('remove', 'tomato')} className="ingrBtn">Remove</button>
                     
                    </div>
                    <p>meat</p>
                    <div className="ingrBtns">
                      <button onClick={() => this.addRemoveIngredient('add', 'meat')} className="ingrBtn">Add</button>
                     <button onClick={() => this.addRemoveIngredient('remove', 'meat')} className="ingrBtn">Remove</button>
                    
                    </div>
                  </div>
               </>
        );
    }
}