import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private tasks = ['one'];

  constructor(private http: HttpClient) {}

  getTasks() {
    const res = this.http.get("https://jsonplaceholder.typicode.com/todos/1");
    return res;
  }
}
