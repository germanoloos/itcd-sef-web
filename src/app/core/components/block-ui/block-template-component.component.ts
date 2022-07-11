import { Component } from '@angular/core';

@Component({
  styles: [`
    :host {
      text-align: center;
      font-size: 30px;
      color: #FFFFFF;
    }
  `],
  template: `
    <div class="block-ui-template">
      <!-- <i class="fa fa-github-alt fa-4x" aria-hidden="true"></i> -->
      <div><strong>Aguarde...</strong></div>
    </div>
  `
})
export class BlockTemplateComponent {
  message!: String;
}
