import { LoggerService } from './../../services/logger.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-select-comida',
  templateUrl: './select-comida.component.html',
  styleUrls: ['./select-comida.component.css'],
  providers: [LoggerService]
})
export class SelectComidaComponent{

  comida = '';

  constructor(private loggerService: LoggerService) { }

  printLog(msg: string, color: string):void{
    this.loggerService.printLog(msg,color);
  }

}
