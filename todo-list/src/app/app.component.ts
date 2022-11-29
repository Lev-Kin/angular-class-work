import { Component } from '@angular/core';
import { ITask } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  task!: string;

  list: ITask[] = [];

  addTask(): void {
    if (this.task != "") {
      this.list.push({
        text: this.task,
        done: false
      });
    }
  }

  delete(index: number): void {
    this.list.splice(index, 1);
  }
}
