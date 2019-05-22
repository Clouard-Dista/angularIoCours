import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BattleLoggerComponent } from './battle-logger.component';

describe('BattleLoggerComponent', () => {
  let component: BattleLoggerComponent;
  let fixture: ComponentFixture<BattleLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleLoggerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BattleLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log(component)
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
