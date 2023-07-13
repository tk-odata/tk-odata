import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QbFilterComponent } from './qb-filter.component';

describe('QbFilterComponent', () => {
  let component: QbFilterComponent;
  let fixture: ComponentFixture<QbFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QbFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QbFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
