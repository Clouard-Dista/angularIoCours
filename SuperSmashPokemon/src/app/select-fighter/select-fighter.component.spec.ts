import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFighterComponent } from './select-fighter.component';
import { compileComponent } from '@angular/core/src/render3/jit/directive';

describe('SelectFighterComponent', () => {
  let component: SelectFighterComponent;
  let fixture: ComponentFixture<SelectFighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get name', () => {
    expect(component.pokelist.length).toBeGreaterThan(0);
  });

});
