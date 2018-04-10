import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFashionComponent } from './shop-fashion.component';

describe('ShopFashionComponent', () => {
  let component: ShopFashionComponent;
  let fixture: ComponentFixture<ShopFashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFashionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
