import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }

  updateHandler(e, key){
    const newitem= this.state.items.map(item => {
      if(item.key===key){
        //console.log(item.key +"    "+key)
        item.text= e.target.value;
      }
      return item
    })
    this.setState({
      items: newitem
    })
  }


  addItem = (event) =>{
    event.preventDefault();
    const newItem = this.state.currentItem
    //console.log(newItem)
    if(newItem.text!==''){
      const newItems=[...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
    
  }

  render() {
    return (
      <div className = 'App'>
        <h1>Todo App</h1>
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Text" 
          onChange={this.handleInput}
          value={this.state.currentItem.text}
          />
          <button type="submit">Add</button>
          </form>
        </header>
        <ListItem items={this.state.items} deleteItem={this.deleteItem} updateHandler={this.updateHandler}/>
        </div>
    );
  }
}

export default App;
