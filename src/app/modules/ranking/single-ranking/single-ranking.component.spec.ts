import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRankingComponent } from './single-ranking.component';

describe('SingleRankingComponent', () => {
  let component: SingleRankingComponent;
  let fixture: ComponentFixture<SingleRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
