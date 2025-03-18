import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdsReturnComponent } from './tds-return.component';

describe('TdsReturnComponent', () => {
  let component: TdsReturnComponent;
  let fixture: ComponentFixture<TdsReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdsReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdsReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
