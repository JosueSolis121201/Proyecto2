import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterService);
  });

  it('login',()=>{
    let suma = 5 + 5;
    expect(suma == 10).toBeTruthy();

  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
