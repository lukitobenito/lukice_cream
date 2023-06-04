import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkciaComponent } from './akcia.component';

describe('AkciaComponent', () => {
  let component: AkciaComponent;
  let fixture: ComponentFixture<AkciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkciaComponent]
    });
    fixture = TestBed.createComponent(AkciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
