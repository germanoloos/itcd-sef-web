import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyMaskConfig, CurrencyMaskInputMode } from 'ngx-currency';

@Pipe({
  name: 'currencyformat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '';
    }
    return (
      customCurrencyMaskConfig.prefix +
      value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    );
  }
}

export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: true,
  inputMode: CurrencyMaskInputMode.FINANCIAL,
};
