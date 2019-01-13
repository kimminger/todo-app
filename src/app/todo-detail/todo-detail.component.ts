import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  /*  The route.snapshot is a static image of the route information
      shortly after the component was created.
      The paramMap is a dictionary of route parameter values extracted from the URL.
      The "id" key returns the id of the todo to fetch.
      Route parameters are always strings.
      The JavaScript (+) operator converts the string to a number, which is what a todo id should be.
 */
    getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.todoService.updateTodo(this.todo)
      .subscribe(() => this.goBack());
  }
}
