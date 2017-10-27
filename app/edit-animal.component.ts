import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf='childSelectedAnimal'>
    <h3>{{childSelectedAnimal.name}}</h3>
    <h5>Age: {{childSelectedAnimal.age}}</h5>
    <h5>Diet: {{childSelectedAnimal.diet}}</h5>
    <h5>Location: {{childSelectedAnimal.location}}</h5>
    <h5>Caretakers: {{childSelectedAnimal.caretakers}}</h5>
    <h5>Sex: {{childSelectedAnimal.sex}}</h5>
    <h5>Likes: {{childSelectedAnimal.likes}}</h5>
    <h5>Dislikes: {{childSelectedAnimal.dislikes}}</h5>
    <h5>Species Family: {{childSelectedAnimal.speciesFamily}}</h5>
    <h5>Species: {{childSelectedAnimal.species}}</h5>
    <h5>Date Admitted: {{childSelectedAnimal.dateAdmitted}}</h5>
    <hr>
    <h3>Edit Animal Bio</h3>
    <label>Enter Animal Name:</label>
    <input [(ngModel)]="childSelectedAnimal.name">
    <label>Enter Animal Age:</label>
    <input [(ngModel)]="childSelectedAnimal.age">
    <label>Enter Animal Diet:</label>
    <input [(ngModel)]="childSelectedAnimal.diet">
    <label>Enter Animal Location:</label>
    <input [(ngModel)]="childSelectedAnimal.location">
    <label>Enter Animal Caretakers:</label>
    <input [(ngModel)]="childSelectedAnimal.caretakers">
    <label>Enter Animal Sex:</label>
    <input [(ngModel)]="childSelectedAnimal.sex">
    <label>Enter Animal Likes:</label>
    <input [(ngModel)]="childSelectedAnimal.likes">
    <label>Enter Animal Dislikes:</label>
    <input [(ngModel)]="childSelectedAnimal.dislikes">
    <label>Enter Animal Species Family:</label>
    <input [(ngModel)]="childSelectedAnimal.speciesFamily">
    <label>Enter Animal Species:</label>
    <input [(ngModel)]="childSelectedAnimal.species">
    <label>Enter Animal Date Admitted:</label>
    <input [(ngModel)]="childSelectedAnimal.dateAdmitted">
    <button class='button' (click)='doneButtonClicked()'>Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
