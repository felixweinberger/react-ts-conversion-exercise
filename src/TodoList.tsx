import React, { Component } from 'react';
import { TodoItem } from './TodoItems';

export type TodoListProps = {
  inputElement: React.RefObject<HTMLInputElement>,
  addItem(e: React.FormEvent<HTMLFormElement>): void,
  handleInput(e: React.ChangeEvent<HTMLInputElement>): void,
  currentItem: TodoItem
}

export class TodoList extends Component<TodoListProps> {
  componentDidUpdate() {
    if (this.props.inputElement.current) this.props.inputElement.current.focus()
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}
