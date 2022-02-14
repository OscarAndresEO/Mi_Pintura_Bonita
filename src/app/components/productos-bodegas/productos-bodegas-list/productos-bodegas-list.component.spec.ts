import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBodegasListComponent } from './productos-bodegas-list.component';

describe('ProductosBodegasListComponent', () => {
  let component: ProductosBodegasListComponent;
  let fixture: ComponentFixture<ProductosBodegasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosBodegasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosBodegasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
