import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComidaComponent } from './select-comida/select-comida.component';



@NgModule({
  declarations: [
    SelectComidaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectComidaComponent
  ]
})
export class ComidaModule { }
