import React, { Component } from 'react'

export type TodoItem = {
  key: string;
  text: string;
}

export type TodoItemsProps = {
  entries: TodoItem[],
  deleteItem(key: string): void,
}

class TodoItems extends Component<TodoItemsProps, {}> {
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
