import { Injectable , EventEmitter} from '@angular/core';


export class BattleService {

  constructor() { }

  //Mock test only
  //TODO : change dynamically
  getAttackEvent(): EventEmitter<string>{
    let events = new EventEmitter<string>();
    events.emit("event1");
    events.emit("event2");
    events.emit("event3");

    return events;
  }

}
