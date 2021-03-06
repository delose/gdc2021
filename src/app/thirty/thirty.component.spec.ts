import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtyComponent } from './thirty.component';

describe('ThirtyComponent', () => {
  let component: ThirtyComponent;
  let fixture: ComponentFixture<ThirtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
