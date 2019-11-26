import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;
  name: string;

  constructor(
    private todoDataService: TodoDataService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.name = sessionStorage.getItem('authUser');
    this.todo = new Todo(this.id, '', new Date(), false);
    if (this.id != -1) {
      this.todoDataService.getTodo(this.name, this.id).subscribe(
        data => this.todo = data
      );
    }
  }
  saveTodo(todo) {
    const username = sessionStorage.getItem('authUser');
    const id = this.activateRoute.snapshot.params['id'];
    if (this.id == -1) {
      this.todoDataService.saveTodo(username, todo).subscribe(
        response => {
          this.router.navigate(['todos']);
        }
      );
    } else {
      this.todoDataService.updateTodo(username, id, todo).subscribe(
        response => {
          this.router.navigate(['todos']);
        }
      );
    }
  }

}
