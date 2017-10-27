import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: 'species',
  pure: false
})


export class SpeciesPipe implements PipeTransform {
  transform(input: Animal[], family) {
    let output: Animal[] = [];
    if(family === "bird of prey"){
      for (let i=0; i < input.length; i++) {
        if (input[i].family === "bird of prey") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(family === "big cat") {
      for (let i=0; i < input.length; i++) {
        if (input[i].family === "big cat") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(family === "great ape"){
      for (let i=0; i < input.length; i++) {
        if (input[i].family === "great ape") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(family === "elephant"){
      for (let i=0; i < input.length; i++) {
        if (input[i].family === "elephant") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(family === "all"){
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
