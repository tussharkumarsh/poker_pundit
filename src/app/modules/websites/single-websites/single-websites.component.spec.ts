import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWebsitesComponent } from './single-websites.component';

describe('SingleWebsitesComponent', () => {
  let component: SingleWebsitesComponent;
  let fixture: ComponentFixture<SingleWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleWebsitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
