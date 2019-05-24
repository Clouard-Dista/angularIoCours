import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggerService = TestBed.get(LoggerService);
    expect(service).toBeTruthy();
  });


  it('push a Log', () => {
    const service: LoggerService = TestBed.get(LoggerService);
    service.push('The fight is over!');
    expect(service.get()).toEqual(['The fight is over!']);
  });


  it('get Logs', () => {
    const service: LoggerService = TestBed.get(LoggerService);
    service.push('The fight begin ');
    service.push('Dracaufeu is dead');
    service.push('Pikachu Wins');
    service.push('The fight is over!');
    expect(service.get()).toEqual(['The fight begin ', 'Dracaufeu is dead', 'Pikachu Wins', 'The fight is over!']);
  });

  it('clear Logs', () => {
    const service: LoggerService = TestBed.get(LoggerService);
    service.push('The fight begin ');
    service.push('Dracaufeu is dead');
    service.push('Pikachu Wins');
    service.push('The fight is over!');
    service.clear()
    expect(service.get()).toEqual([]);
  });
});
