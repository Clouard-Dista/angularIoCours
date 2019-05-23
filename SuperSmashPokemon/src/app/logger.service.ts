import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {
  private logs: string[] = [];
  push(msg: string)   {
    this.logs.push(msg);
  }
  get(): string[] { 
    return this.logs; 
  }
}