import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayActionComponent } from './today-action.component';

describe('TodayActionComponent', () => {
  let component: TodayActionComponent;
  let fixture: ComponentFixture<TodayActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
