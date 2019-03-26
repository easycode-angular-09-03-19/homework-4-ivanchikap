import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MyTodo } from '../../interfaces/myTodo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges {
  @Input() todo: MyTodo;
  isVisible = true;
  isDelete: boolean;
  isComplete: boolean;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
  }

  deleteTodo() {
    this.isDelete = confirm(`Do you want to delete todo with id: ${this.todo.id}?`);
    if (this.isDelete) {
      this.isVisible = false;
    }
  }

  comleteTodo() {
    this.isComplete = confirm(`Do you finish todo with id: ${this.todo.id}`);
    if (this.isComplete) {
      this.todo.completed = this.isComplete;
    }
  }

}
