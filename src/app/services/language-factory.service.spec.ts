import { TestBed } from '@angular/core/testing';

import { LanguageFactory } from './language-factory.service';

describe('LanguageFactoryService', () => {
  let service: LanguageFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
