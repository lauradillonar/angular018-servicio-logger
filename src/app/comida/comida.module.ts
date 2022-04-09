import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComidaComponent } from './select-comida/select-comida.component';



@NgModule({
  declarations: [
    SelectComidaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectComidaComponent
  ]
})
export class ComidaModule { }
