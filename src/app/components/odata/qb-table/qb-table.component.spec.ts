import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QbTableComponent } from './qb-table.component';

describe('QbTableComponent', () => {
  let component: QbTableComponent;
  let fixture: ComponentFixture<QbTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QbTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
