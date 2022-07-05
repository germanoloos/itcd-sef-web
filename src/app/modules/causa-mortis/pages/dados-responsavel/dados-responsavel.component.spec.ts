import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosResponsavelComponent } from './dados-responsavel.component';

describe('DadosResponsavelComponent', () => {
  let component: DadosResponsavelComponent;
  let fixture: ComponentFixture<DadosResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosResponsavelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
