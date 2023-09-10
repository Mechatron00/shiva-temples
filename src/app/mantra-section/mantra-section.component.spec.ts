import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantraSectionComponent } from './mantra-section.component';

describe('MantraSectionComponent', () => {
  let component: MantraSectionComponent;
  let fixture: ComponentFixture<MantraSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantraSectionComponent]
    });
    fixture = TestBed.createComponent(MantraSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
