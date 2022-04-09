import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBebidaComponent } from './select-bebida.component';

describe('SelectBebidaComponent', () => {
  let component: SelectBebidaComponent;
  let fixture: ComponentFixture<SelectBebidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBebidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
