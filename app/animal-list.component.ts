import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)='onChange($event.target.value)'>
    <option value="all">All Animals</option>
    <option value="young">Young Animals</option>
    <option value="old">Old Animals</option>
  </select>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | age:agePipe">{{currentAnimal.name}} -  {{currentAnimal.species}} <img src='{{currentAnimal.graphic}}'>
      <button class="button" (click)="editAnimal(currentAnimal)">View Animal</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  agePipe: string = "all";
  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(ageValue) {
    this.agePipe = ageValue;
  }

}
