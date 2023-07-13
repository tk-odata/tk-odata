import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODataQuerybuilderComponent } from './odata-querybuilder.component';

describe('ODataQuerybuilderComponent', () => {
  let component: ODataQuerybuilderComponent;
  let fixture: ComponentFixture<ODataQuerybuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ODataQuerybuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ODataQuerybuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
