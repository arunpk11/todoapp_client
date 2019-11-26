import { TestBed } from '@angular/core/testing';

import { JWTAuthenticationService } from './jwtauthentication.service';

describe('JWTAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JWTAuthenticationService = TestBed.get(JWTAuthenticationService);
    expect(service).toBeTruthy();
  });
});
