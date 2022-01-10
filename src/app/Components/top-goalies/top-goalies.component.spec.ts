import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGoaliesComponent } from './top-goalies.component';

describe('TopGoaliesComponent', () => {
  let component: TopGoaliesComponent;
  let fixture: ComponentFixture<TopGoaliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGoaliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGoaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
