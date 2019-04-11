import { Component, OnInit } from '@angular/core';
import { MyTodo } from '../../interfaces/myTodo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: MyTodo[] = [
    {
      id: 1,
      text: '111 lorem ipsum lorem ipsum  111',
      completed: false
    },
    {
      id: 2,
      text: '222 lorem ipsum lorem ipsum  222',
      completed: false
    },
    {
      id: 3,
      text: '333 lorem ipsum lorem ipsum  333',
      completed: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onOutputDeleteEvent(id: number) {
    this.todos = this.todos.filter((todo: MyTodo) => todo.id !== id);
  }

  onOutputCompleteTodo(id: number) {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
    });
  }

  completeTodos() {
    if ( confirm('Do you want to finish all todos?') ) {
      this.todos.forEach((todo) => {
        todo.completed = true;
      });
    }
  }

}
