import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerAdvertisementComponent } from './ticker-advertisement.component';

describe('TickerAdvertisementComponent', () => {
  let component: TickerAdvertisementComponent;
  let fixture: ComponentFixture<TickerAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerAdvertisementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TickerAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
