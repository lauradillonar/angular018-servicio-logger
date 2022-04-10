import { Injectable } from '@angular/core';

export class LoggerService {

  constructor() { 
    console.log('Servicio de Logger inyectado correctamente');
  }

  today = new Date().toLocaleString();

  printLog ( msg: string, color: string): void{
      console.log('%c' + this.today + ' - ' + msg, ('background-color: ' + color + ';'));
    }
}