import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor (
    public id: number,
    public description: string,
    public targetDate: Date,
    public isDone: boolean
  ) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
  todos: Todo[];
  name: string;
  message: string;
  // [
  //   new Todo(1, 'Learn to SpringBoot', false, new Date),
  //   new Todo(2, 'Learn to React', false, new Date),
  //   new Todo(3, 'Learn to Angular', false, new Date)
  //   // {      id : 1,      description : 'Learn to SpringBoot'    },
  //   // {      id : 2,      description : 'Learn to React '    },
  //   // {      id : 3,      description : 'Learn to Angular '    }
  // ];
  // todo = {
  //   id : 1,
  //   description : 'Learn to Talk Professionally'
  // };
  constructor(
    private todoDataService: TodoDataService,
    private router: Router
    ) { }

  ngOnInit() {
    this.name = sessionStorage.getItem('authUser');
    this.todoDataService.retrieveAllTodos(this.name).subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos(this.name).subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id, desc) {
    this.todoDataService.deleteTodo(this.name, id).subscribe(
      response => {
        this.message = `${desc} has been deleted`;
        this.refreshTodos();
      });
  }

  updateTodo(id) {
    this.router.navigate(['update', id]);
  }

  addTodo() {
    this.router.navigate(['update', -1]);
  }
}



