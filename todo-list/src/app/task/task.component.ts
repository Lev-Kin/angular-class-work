import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../model/model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: ITask;
  @Input() index!: number;

  @Output() onDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  done(): void {
    this.task.done = true;
  }

  delete(): void {
    this.onDeleted.emit(this.index);
  }

}
