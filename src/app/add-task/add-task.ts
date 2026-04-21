import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {
  items = ['one', 'two'];
  taskName = '';
  @Input() name! : string;

  constructor(private taskService: Task) {
    // this.taskService.getTasks().subscribe((data: any) => {
    //   console.log(data);
    // });
  }

  ngOnInit() {
    console.log(this.name);
  }

  addTask() {
    console.log(this.taskName);
    this.taskName = '';
  }
}
