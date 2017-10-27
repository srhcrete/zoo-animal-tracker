import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Animal[], age) {
    var output: Animal[] = [];
    if(age === "young"){
      for (var i=0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(age === "old") {
      for (var i=0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(age === "all"){
      for (var i=0; i < input.length; i++) {
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
