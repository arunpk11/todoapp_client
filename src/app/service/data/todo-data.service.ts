import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL, DATA_URL } from 'src/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(name) {
    return this.http.get<Todo[]>(`${DATA_URL}/users/${name}/todos`);
  }

  deleteTodo(name, id) {
    return this.http.delete(`${DATA_URL}/users/${name}/todos/${id}`);
  }

  getTodo(name, id) {
    return this.http.get<Todo>(`${DATA_URL}/users/${name}/todos/${id}`);
  }

  updateTodo(name, id, todo) {
    return this.http.put(`${DATA_URL}/users/${name}/todos/${id}`, todo);
  }

  saveTodo(name, todo) {
    return this.http.post(`${DATA_URL}/users/${name}/todos`, todo);
  }
}
