import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTask } from './add-task/add-task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTask],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tasks-app');
}
