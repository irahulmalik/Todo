import { Component, OnInit } from '@angular/core';
import { status } from '../../models/status.enum';
import { todo } from '../../models/todo.model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Array<todo>;

  constructor() {}
  // private dataService: DataService

  ngOnInit(): void {
    this.todos = [
      { id: 1, status: status.TODO, todo: 'Hey this is first' },
      { id: 2, status: status.INPROGRESS, todo: 'Hey this is 2nd' },
      { id: 3, status: status.DONE, todo: 'Hey this is 3rd' },
    ];

    console.log(this.todos);
    // this.getAllTodos;
  }

  getColor(status) {
    // console.log(status);

    switch (status) {
      case 0:
        return 'red';
      case 1:
        return 'blue';
      case 2:
        return 'green';
      default:
        return 'black';
    }
  }

  addTodo() {
    console.log('Add tdo');
  }

  getAllTodos() {
    // this.dataService.getAllTodos().subscribe((res) => (this.todos = res));
  }

  onProgress() {
    //call api service to increat the status
  }
  onDone() {
    //call api service to make the status to done
  }
}
