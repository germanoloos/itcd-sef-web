import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainService } from '@app/core/services/domain.service';
import { BensDireitosDividasService } from '@app/modules/causa-mortis/services/bens-direitos-dividas.service';
import { of } from 'rxjs';
import {
  ImoveisNoExteriorComponent,
  ImoveisNoExteriorForm,
} from './imovel-no-exterior.component';

describe('ImoveisNoExteriorComponent', () => {
  let component: ImoveisNoExteriorComponent;
  let fixture: ComponentFixture<ImoveisNoExteriorComponent>;
  let debugElement: DebugElement;
  let bensDireitosDividasService: BensDireitosDividasService;
  let bensDireitosDividasSpy: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ImoveisNoExteriorComponent],
      providers: [
        FormBuilder,
        { provide: DomainService, userValue: domainService },
        {
          privede: BensDireitosDividasService,
          useValue: bensDireitosDividasService,
        },
      ],
    });

    // create component and test fixture
    fixture = TestBed.createComponent(ImoveisNoExteriorComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
    debugElement = fixture.debugElement;
    bensDireitosDividasService = debugElement.injector.get(
      BensDireitosDividasService
    );
    bensDireitosDividasSpy = spyOn(
      bensDireitosDividasService,
      'postImovelNoExterior'
    ).and.callThrough();
  });

  it('form invalid when empty', () => {
    expect(component.imovelExteriorForm.valid).toBeFalsy();
  });

  it('form valid when populated', () => {
    expect(component.imovelExteriorForm.valid).toBeFalsy();
    component.imovelExteriorForm.patchValue(ImovelNoExteriorMock);
    expect(component.imovelExteriorForm.valid).toBeTruthy();
  });

  it('submits the form successfully', async () => {
    const imovel = ImovelNoExteriorMock;
    component.imovelExteriorForm.setValue(imovel);
    component.onSubmit();
    expect(bensDireitosDividasSpy).toHaveBeenCalledWith(imovel);
  });

  it('do not submits the form', async () => {
    component.onSubmit();
    // fixture.debugElement.query(By.css('form')).triggerEventHandler('submit');
    expect(bensDireitosDividasSpy).toHaveBeenCalledTimes(0);
  });
});

const ImovelNoExteriorMock: ImoveisNoExteriorForm = {
  propriedadeDoBem: 1,
  utilizacaoDoImovel: 1,
  valorTotal: 1,
  dataValorTotal: new Date(),
  percentual: 100,
  pais: 'brasil',
  codigoPostal: '25777-777',
  cidade: 'A',
  estado: 'B',
  logradouro: 'C',
  anexo: new File([], 'file'),
};

const domainService: Pick<DomainService, keyof DomainService> = {
  getPaises() {
    return of(['Brasil']);
  },
};
