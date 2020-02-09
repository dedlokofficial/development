import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCuisineComponent } from './product-by-cuisine.component';

describe('ProductByCuisineComponent', () => {
  let component: ProductByCuisineComponent;
  let fixture: ComponentFixture<ProductByCuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductByCuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
