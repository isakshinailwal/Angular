import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCinemaComponent } from './new-cinema.component';

describe('NewCinemaComponent', () => {
  let component: NewCinemaComponent;
  let fixture: ComponentFixture<NewCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
