import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}} -  {{currentAnimal.species}} <img src='{{currentAnimal.graphic}}'>
      <button class="button" (click)="editAnimal(currentAnimal)">View Animal</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
