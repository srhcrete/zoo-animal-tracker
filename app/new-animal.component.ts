import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <hr>
    <h1>Admit a new animal to the zoo: </h1>
    <div>
      <label>Name</label>
      <input #newName>
      <label>Age</label>
      <input #newAge>
      <label>Diet</label>
      <input #newDiet>
      <label>Location</label>
      <input #newLocation>
      <label>Caretakers</label>
      <input #newCaretakers>
      <label>Sex</label>
      <input #newSex>
      <label>Likes</label>
      <input #newLikes>
      <label>Dislikes</label>
      <input #newDislikes>
      <label>Species Family</label>
      <input #newSpeciesFamily>
      <label>Species</label>
      <input #newSpecies>
      <label>Date Admitted</label>
      <input #newDateAdmitted>
      <button class="button" (click)="submitForm(newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value, newSpeciesFamily.value, newSpecies.value, newDateAdmitted.value);">Add</button>
    </div>
  `

})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string, speciesFamily: string, species: string, dateAdmitted: string){
    var newAnimalToAdd: Animal = new Animal(name, age, diet, location, caretakers, sex, likes, dislikes, speciesFamily, species, dateAdmitted);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
