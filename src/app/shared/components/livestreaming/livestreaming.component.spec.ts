import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamingComponent } from './livestreaming.component';

describe('LivestreamingComponent', () => {
  let component: LivestreamingComponent;
  let fixture: ComponentFixture<LivestreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivestreamingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivestreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
