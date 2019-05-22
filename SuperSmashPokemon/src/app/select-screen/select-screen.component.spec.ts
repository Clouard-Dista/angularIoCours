import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectFighterComponent } from '../select-fighter/select-fighter.component';
import { SelectScreenComponent } from './select-screen.component';

describe('SelectScreenComponent', () => {
  let component: SelectScreenComponent;
  let fixture: ComponentFixture<SelectScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectScreenComponent, SelectFighterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
