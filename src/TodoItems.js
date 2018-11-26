import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} /*onClick={ () => this.props.deleteItem(item.key) }*/  >
      <input type ="checkbox"/>{item.text}</li>
    )
  }
  
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    
    //const activeItems = listItems.filter( item => item.complete === false)
    //const completeItems = listItems.filter( item => item.complete === true)
  
    
    return <div>
    <p>Active:</p>
    <ul className="theList">{ listItems }</ul>
    <p>Completed:</p>
    <ul className="theList">{ listItems }</ul>
    </div>
  }
}

export default TodoItems