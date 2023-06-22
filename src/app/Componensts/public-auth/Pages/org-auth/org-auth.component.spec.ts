import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAuthComponent } from './org-auth.component';

describe('OrgAuthComponent', () => {
  let component: OrgAuthComponent;
  let fixture: ComponentFixture<OrgAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
