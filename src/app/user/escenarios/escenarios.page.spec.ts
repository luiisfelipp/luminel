import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscenariosPage } from './escenarios.page';

describe('EscenariosPage', () => {
  let component: EscenariosPage;
  let fixture: ComponentFixture<EscenariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscenariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
