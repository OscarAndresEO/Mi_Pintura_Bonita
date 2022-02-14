import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBodegasFormComponent } from './productos-bodegas-form.component';

describe('ProductosBodegasFormComponent', () => {
  let component: ProductosBodegasFormComponent;
  let fixture: ComponentFixture<ProductosBodegasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosBodegasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosBodegasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
