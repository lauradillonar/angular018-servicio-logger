import { LoggerService } from './../../services/logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-bebida',
  templateUrl: './select-bebida.component.html',
  styleUrls: ['./select-bebida.component.css'],
  providers: [LoggerService]
})
export class SelectBebidaComponent{

  bebida = '';

  constructor(private loggerService: LoggerService) { }

}
