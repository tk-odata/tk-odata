import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFilterComponent } from './comp-filter.component';

describe('CompFilterComponent', () => {
  let component: CompFilterComponent;
  let fixture: ComponentFixture<CompFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
