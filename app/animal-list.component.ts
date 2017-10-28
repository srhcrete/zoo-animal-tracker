import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="container">
  <label>Filter by Age</label>
  <select (change)='onChange($event.target.value)'>
    <option value="all">All Animals</option>
    <option value="young">Young Animals</option>
    <option value="old">Old Animals</option>
  </select>
  </div>

  <div class="container">
  <label>Filter by Diet</label>
  <select (change)='onChangeDiet($event.target.value)'>
    <option value="all">All Animals</option>
    <option value="carnivore">Carnivores</option>
    <option value="herbivore">Herbivores</option>
    <option value="omnivore">Omnivores</option>
  </select>
  </div>

  <div class="container">
  <label>Filter by Species</label>
  <select (change)='onChangeSpecies($event.target.value)'>
    <option value="all">All Animals</option>
    <option value="big cat">Big Cats</option>
    <option value="bird of prey">Birds of Prey</option>
    <option value="elephant">Elephants</option>
    <option value="great ape">Great Apes</option>
  </select>
  </div>
  <ul>
    <li *ngFor='let currentAnimal of childAnimalList | age:agePipe | diet:dietPipe | species:speciesPipe'>{{currentAnimal.name}} -  {{currentAnimal.family}} <img src='{{currentAnimal.graphic}}'>
      <button class='button' (click)='editAnimal(currentAnimal)'>View Animal</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  agePipe: string = "all";
  dietPipe: string ="all";
  speciesPipe: string="all";
  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(ageValue) {
    this.agePipe = ageValue;
  }

  onChangeDiet(dietValue) {
    this.dietPipe = dietValue;
  }

  onChangeSpecies(speciesValue) {
    this.speciesPipe = speciesValue;
  }


}
