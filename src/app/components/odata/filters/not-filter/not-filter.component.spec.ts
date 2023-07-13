import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFilterComponent } from './not-filter.component';

describe('NotFilterComponent', () => {
  let component: NotFilterComponent;
  let fixture: ComponentFixture<NotFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
