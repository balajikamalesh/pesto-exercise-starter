import React from 'react';
import Grocerylist from './components/grocerylist';
import './App.css';

class App extends React.Component {
	constructor(){
		super()
		this.state = {
      groceryItems: [{name:"Quaker Oats",quantity: 1},{name:"Magiee",quantity: 1},{name:"Biscuit",quantity: 1}],
      newItem: ''
    }
    this.addItem = this.addItem.bind(this);
    this.setNewItem = this.setNewItem.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  setNewItem(newItemName){
    this.setState({newItem: newItemName})
  }

  addItem(){
    let currentItems = this.state.groceryItems;
    if(this.state.newItem !== ''){
        if(currentItems.some((item) => item.name.toLowerCase() === this.state.newItem.toLowerCase())){
            currentItems.forEach((item) => {
              if(item.name.toLowerCase() === this.state.newItem.toLowerCase())
                item.quantity += 1;
            })
        } else {
          currentItems.push({name: this.state.newItem, quantity: 1})
        }
        this.setState({groceryItems: currentItems});
    } 
  }

  clearList(){
    this.setState({groceryItems: []});
  }

 render(){
   const buttonStyle = {
      backgroundColor: '#4CAF50',
      border: 'none',
      margin: '5px',
      color: 'white',
      padding: '5px 10px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px'
   }

   const center = {
     margin: '2% auto',
     textAlign: 'center',
     width: '50%'
   }

   const inputStyle = {
      width: '100%',
      padding: '12px 20px',
      margin: '8px 0',
      display: 'inline-block',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box'
   }

  return (
    <div style={center}>
      <h1>Grocery List Items 🛍️</h1>
      <input style={inputStyle} type='text' onChange={event => this.setNewItem(event.target.value) } />
      <button style={buttonStyle} type='submit' onClick={this.addItem}>Add</button>
      <button style={buttonStyle} onClick={this.clearList}>Clear</button>
      <Grocerylist list={this.state.groceryItems} />
    </div>
  )
 }

}

export default App;
