import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: 'diet',
  pure: false
})


export class DietPipe implements PipeTransform {
  transform(input: Animal[], diet) {
    let output: Animal[] = [];
    if(diet === "carnivore"){
      for (let i=0; i < input.length; i++) {
        if (input[i].diet === "carnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(diet === "herbivore") {
      for (let i=0; i < input.length; i++) {
        if (input[i].diet === "herbivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(diet === "omnivore"){
      for (let i=0; i < input.length; i++) {
        if (input[i].diet === "omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    }  else if(diet === "all"){
      for (let i=0; i < input.length; i++) {
        if (input[i].age > 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
