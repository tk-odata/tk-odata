import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritFilterComponent } from './crit-filter.component';

describe('CritFilterComponent', () => {
  let component: CritFilterComponent;
  let fixture: ComponentFixture<CritFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CritFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
