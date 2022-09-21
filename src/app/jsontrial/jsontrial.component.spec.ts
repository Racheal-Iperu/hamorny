import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONTrialComponent } from './jsontrial.component';

describe('JSONTrialComponent', () => {
  let component: JSONTrialComponent;
  let fixture: ComponentFixture<JSONTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JSONTrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
