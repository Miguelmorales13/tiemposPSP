import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiemposPSPComponent } from './tiempos-psp.component';

describe('TiemposPSPComponent', () => {
  let component: TiemposPSPComponent;
  let fixture: ComponentFixture<TiemposPSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiemposPSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiemposPSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
