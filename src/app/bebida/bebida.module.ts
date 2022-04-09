import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBebidaComponent } from './select-bebida/select-bebida.component';



@NgModule({
  declarations: [
    SelectBebidaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectBebidaComponent
  ]
})
export class BebidaModule { }
