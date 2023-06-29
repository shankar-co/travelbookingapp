import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteldetailComponent } from './hoteldetail.component';

describe('HoteldetailComponent', () => {
  let component: HoteldetailComponent;
  let fixture: ComponentFixture<HoteldetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteldetailComponent]
    });
    fixture = TestBed.createComponent(HoteldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
