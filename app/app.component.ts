import { Component } from '@angular/core';
import {Animal} from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Zoo Animal Tracker</h1>
    <h3>Current Date: {{month}}/{{day}}/{{year}}</h3>

    <animal-list [childAnimalList]='masterAnimalList' (clickSender)='editAnimal($event)'></animal-list>
    <hr>
    <edit-animal [childSelectedAnimal]='selectedAnimal'></edit-animal>
    <new-animal (newAnimalSender)='addAnimal($event)'></new-animal>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Liberty', 5, 'carnivore', 'eagle canyon', 2, 'male', 'fish', 'hot weather', 'bird of prey', 'eagle', '9/2/2014'),
    new Animal('Clark', 2, 'carnivore', 'cougar crossing', 4, 'male', 'rabbit', 'loud noises', 'big cat', 'cougar', '6/16/2017'),
    new Animal('Modoc', 16, 'herbivore', 'elephant lands', 3, 'female', 'peanuts', 'mice', 'elephant', 'elephant', '1/22/2009'),
    new Animal('Hobbes', 1, 'carnivore', 'amur cars', 4, 'male', 'steak, tuna', 'loud noises', 'big cat', 'tiger', '2/10/2018'),
    new Animal('Mr. Wednesday', 8, 'carnivore', 'eagle canyon', 2, 'male', 'mice', 'daytime', 'bird of prey', 'snowy owl', '3/5/2014'),
    new Animal('Kubo', 5, 'omnivore', 'ape island', 3, 'female', 'bananas', 'cold weather, men in yellow hats', 'great ape', 'chimpanzee', '12/10/2015'),
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
    console.log('you have selected an animal to edit');
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
