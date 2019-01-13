import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const todos: Todo[] = [
      { id: 11, title: 'Do laundry', completed: false },
      { id: 12, title: 'Wash dishes', completed: false },
      { id: 13, title: 'Buy groceries', completed: false },
      { id: 14, title: 'Pay bills', completed: false },
      { id: 15, title: 'Do sports', completed: true },
      { id: 16, title: 'Wash the car', completed: false },
      { id: 17, title: 'Meet Peter', completed: false },
      { id: 18, title: 'Walk dog', completed: true },
      { id: 19, title: 'Do Insight-Analysis', completed: false },
    ];
    return { todos };
  }

  constructor() { }


  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 11;
  }
}
