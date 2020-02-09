import { TestBed } from '@angular/core/testing';

import { RstaurantService } from './rstaurant.service';

describe('RstaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RstaurantService = TestBed.get(RstaurantService);
    expect(service).toBeTruthy();
  });
});
