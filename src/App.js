import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:'', complete : false},
    }
  }
  
  inputElement = React.createRef()
  
  handleInput = e => {
    const new_current = {
      text: e.target.value, 
      key: Date.now(), 
      complete: false
    }
      
    console.log("new current: ")
    console.log(new_current)
    this.setState({
      currentItem: new_current
    })
    /*
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    console.log({text: itemText, key: Date.now() })
    this.setState({
      currentItem,
    })
    */
  }
  
  toggleComplete = key => {
    const updatedItems = this.state.items.map(item => {
      return item.key === key? {...item, complete: !item.complete}:item
    })
    this.setState({
      items: updatedItems,
      currentItem: {text: '', key: '', complete: false},
    })
    console.log("Complete")
    /*
    this.setState(
      this.state.items.map(item => {
        if (item.key === key){
          return {...item, complete: !item.complete}
        } else{
          return item
        }
      }))
      console.log("Complete")
      */
  }
  
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {
          text: '', 
          key: '', 
          complete: false,
        },
      })
    }
    console.log('Add Item')
  }
  
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState ({
      items: filteredItems,
    })
    console.log("Deleted item")
  }
  render() {
    return (
      <div className="todoListMain">
        <TodoList 
        addItem={this.addItem} 
        inputElement={this.inputElement}
        handleInput={this.handleInput}
        currentItem={this.state.currentItem}
        />
      <TodoItems
        title={"Active:"}
        entries={this.state.items}
        showComplete={false}
        toggleComplete={this.toggleComplete}
        />
      <TodoItems
        title={"Completed:"}
        entries={this.state.items}
        deleteItem={this.deleteItem}
        showComplete={true}
        toggleComplete={this.toggleComplete}
        />
      </div>
    )
  }
}

export default App