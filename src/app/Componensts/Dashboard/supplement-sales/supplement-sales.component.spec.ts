import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementSalesComponent } from './supplement-sales.component';

describe('SupplementSalesComponent', () => {
  let component: SupplementSalesComponent;
  let fixture: ComponentFixture<SupplementSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplementSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplementSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
