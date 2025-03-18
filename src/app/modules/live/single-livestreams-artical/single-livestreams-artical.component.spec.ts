import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLivestreamsArticalComponent } from './single-livestreams-artical.component';

describe('SingleLivestreamsArticalComponent', () => {
  let component: SingleLivestreamsArticalComponent;
  let fixture: ComponentFixture<SingleLivestreamsArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLivestreamsArticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleLivestreamsArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
