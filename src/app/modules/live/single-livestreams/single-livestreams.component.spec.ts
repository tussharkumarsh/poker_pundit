import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLivestreamsComponent } from './single-livestreams.component';

describe('SingleLivestreamsComponent', () => {
  let component: SingleLivestreamsComponent;
  let fixture: ComponentFixture<SingleLivestreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLivestreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleLivestreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
