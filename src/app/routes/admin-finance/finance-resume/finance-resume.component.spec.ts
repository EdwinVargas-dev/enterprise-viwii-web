import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceResumeComponent } from './finance-resume.component';

describe('FinanceResumeComponent', () => {
  let component: FinanceResumeComponent;
  let fixture: ComponentFixture<FinanceResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
