1. npm i -g @angular/cli
2. ng generate component add-task: \
    `add-task.ts`

    ```typescript
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-add-task',
      imports: [],
      templateUrl: './add-task.html',
      styleUrl: './add-task.css',
    })
    export class AddTask {}
    ```

    Need to add this component to app.ts to render:

    ```typescript
    import { Component, signal } from '@angular/core';
    import { RouterOutlet } from '@angular/router';
    + import { AddTask } from './add-task/add-task';

    @Component({
      selector: 'app-root',
      - imports: [RouterOutlet],
      + imports: [RouterOutlet, AddTask],
      templateUrl: './app.html',
      styleUrl: './app.css',
    })
    export class App {
      protected readonly title = signal('tasks-app');
    }
    ```

    To use forms, import `FormsModule` in `add-task.ts` and directly define form variables & functions in the class:

    ```typescript
    import { Component } from '@angular/core';
    import { FormsModule } from '@angular/forms';

    @Component({
      selector: 'app-add-task',
      imports: [FormsModule],
      templateUrl: './add-task.html',
      styleUrl: './add-task.css',
    })
    export class AddTask {
      taskName = '';

      addTask() {
        console.log(this.taskName);
        this.taskName = '';
      }
    }
    ```
    `add-task.html`
    ```html
    <form (ngSubmit)="addTask()">
      <input type="text" [(ngModel)]="taskName" name="task" />
      <button type="submit">Submit</button>
    </form>
    ```
