import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyTodo } from '../../interfaces/myTodo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: MyTodo;
  @Output() onCompleteEvent = new EventEmitter();
  @Output() onDeleteEvent = new EventEmitter();

  ngOnInit() {
  }

  deleteTodo() {
    const answer = confirm(`Do you want to delete todo with id: ${this.todo.id}?`);
    if (answer) {
      this.onDeleteEvent.emit(this.todo.id);
    }
  }

  comleteTodo() {
    const isComplete = confirm(`Do you finish todo with id: ${this.todo.id}`);
    if (isComplete) {
      this.onCompleteEvent.emit(this.todo.id);
    }
  }
}
