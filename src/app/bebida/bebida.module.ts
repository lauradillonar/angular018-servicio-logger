import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBebidaComponent } from './select-bebida/select-bebida.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectBebidaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectBebidaComponent
  ]
})
export class BebidaModule { }
