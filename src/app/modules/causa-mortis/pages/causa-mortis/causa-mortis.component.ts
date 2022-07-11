import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  BENS_DIREITOS_DIVIDAS_ROUTE,
  CAUSA_MORTIS_ROUTE,
  DADOS_BASICOS_ROUTE,
  DADOS_RESPONSAVEL_ROUTE,
  IMOVEIS_NOEXTERIOR_ROUTE,
} from '@app/core/providers/url.provider';

interface ItemNode {
  name: string;
  route?: string[];
  children?: ItemNode[];
  expanded?: boolean;
}

const TREE_DATA: ItemNode[] = [
  {
    name: 'Dados básicos',
    route: [DADOS_BASICOS_ROUTE],
  },
  {
    name: 'Dados do responsável',
    route: [DADOS_RESPONSAVEL_ROUTE],
  },
  {
    name: 'Beneficiários | Meeiro',
  },
  {
    name: 'Bens | Direitos | Dívidas',
    route: [BENS_DIREITOS_DIVIDAS_ROUTE],
    children: [
      {
        name: 'Ações em Bolsa, FII, ETF ou BDR',
      },
      {
        name: 'Adiantamento de legitima',
      },
      {
        name: 'Despesa com funeral',
      },
      {
        name: 'Dividas',
      },
      {
        name: 'Imóvel no exterior',
        route: [BENS_DIREITOS_DIVIDAS_ROUTE, IMOVEIS_NOEXTERIOR_ROUTE],
      },
      {
        name: 'Imóvel rural no Brasil',
      },
      {
        name: 'Imóvel urbano no Brasil',
      },
    ],
  },
  {
    name: 'Partilha',
  },
  {
    name: 'Anexos',
  },
  {
    name: 'Envio',
  },
];

@Component({
  selector: 'app-causa-mortis',
  templateUrl: './causa-mortis.component.html',
  styleUrls: ['./causa-mortis.component.scss'],
})
export class CausaMortisComponent {
  nodeList: ItemNode[] = TREE_DATA;

  constructor(private router: Router) {}

  navigate(node: ItemNode): void {
    if (node.route) {
      node.expanded = true;
      this.router.navigate([
        CAUSA_MORTIS_ROUTE,
        { outlets: { 'causa-mortis': node.route } },
      ]);
    }
  }
}
