import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutomatizacionPage } from './automatizacion.page';

describe('AutomatizacionPage', () => {
  let component: AutomatizacionPage;
  let fixture: ComponentFixture<AutomatizacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
