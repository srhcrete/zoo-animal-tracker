import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent }  from './animal-list.component';
import {EditAnimalComponent} from './edit-animal.component';
import {NewAnimalComponent} from './new-animal.component';
import {AgePipe} from './age.pipe';
import {DietPipe} from './diet.pipe';
import {SpeciesPipe} from './species.pipe';



@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  EditAnimalComponent,
                  NewAnimalComponent,
                  AgePipe,
                  DietPipe,
                  SpeciesPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
