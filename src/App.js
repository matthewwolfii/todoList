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
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    console.log({text: itemText, key: Date.now() })
    this.setState({
      currentItem,
    })
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
  toggleComplete = key => {
    this.setState(
      this.state.items.map(item => {
        if (item.key === key){
          return {...item, complete: !item.complete}
        } else{
          return item
        }
      }))
      console.log("Completed")
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
        entries={this.state.items}
        deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default App