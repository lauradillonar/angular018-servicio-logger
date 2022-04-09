import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComidaComponent } from './select-comida.component';

describe('SelectComidaComponent', () => {
  let component: SelectComidaComponent;
  let fixture: ComponentFixture<SelectComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectComidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
