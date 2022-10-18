import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackscreenComponent } from './blackscreen.component';

describe('BlackscreenComponent', () => {
  let component: BlackscreenComponent;
  let fixture: ComponentFixture<BlackscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
