import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { todo } from "../models/todo.model";
import { ApiService } from "./api.service";


@Injectable({
  providedIn:'root',
})
export class DataService{

  constructor(private apiService:ApiService){

  }

  getAllTodos():Observable<Array<todo>>{
    return this.apiService.getAllTodos();
  }

  saveTodo(todo:todo){
    return this.apiService.saveTodo(todo);
  }
 updateTodo(todo:todo){
    return this.apiService.updateTodo(todo);
  }

  deleteTodo(todo:todo){
    return this.apiService.deleteTodo(todo);
  }
}