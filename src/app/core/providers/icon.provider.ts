import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class MatIconProvider {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  public buildIcons(): void {
    this.matIconRegistry.addSvgIcon('cruz', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/cruz.svg'));
    this.matIconRegistry.addSvgIcon('@', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/@.svg'));
    this.matIconRegistry.addSvgIcon('Add_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Add_1.svg'));
    this.matIconRegistry.addSvgIcon('Add_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Add_2.svg'));
    this.matIconRegistry.addSvgIcon('Add_button', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Add_button.svg'));
    this.matIconRegistry.addSvgIcon('Add', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Add.svg'));
    this.matIconRegistry.addSvgIcon('alerta_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/alerta_1.svg'));
    this.matIconRegistry.addSvgIcon('alerta_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/alerta_2.svg'));
    this.matIconRegistry.addSvgIcon('alinhamento_centralizado', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/alinhamento_centralizado.svg'));
    this.matIconRegistry.addSvgIcon('alinhamento_direito', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/alinhamento_direito.svg'));
    this.matIconRegistry.addSvgIcon('alinhamento_esquerdo', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/alinhamento_esquerdo.svg'));
    this.matIconRegistry.addSvgIcon('alinhamento_justificado', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/alinhamento_justificado.svg'));
    this.matIconRegistry.addSvgIcon('anexar', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/anexar.svg'));
    this.matIconRegistry.addSvgIcon('anexar_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/anexar_1.svg'));
    this.matIconRegistry.addSvgIcon('avatar', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/avatar.svg'));
    this.matIconRegistry.addSvgIcon('back_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/back_1.svg'));
    this.matIconRegistry.addSvgIcon('back_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/back_2.svg'));
    this.matIconRegistry.addSvgIcon('back_3', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/back_3.svg'));
    this.matIconRegistry.addSvgIcon('bold', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/bold.svg'));
    this.matIconRegistry.addSvgIcon('calendar', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/calendar.svg'));
    this.matIconRegistry.addSvgIcon('camera', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/camera.svg'));
    this.matIconRegistry.addSvgIcon('card', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/card.svg'));
    this.matIconRegistry.addSvgIcon('chat_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/chat_1.svg'));
    this.matIconRegistry.addSvgIcon('chat_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/chat_2.svg'));
    this.matIconRegistry.addSvgIcon('check_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/check_1.svg'));
    this.matIconRegistry.addSvgIcon('Check_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Check_2.svg'));
    this.matIconRegistry.addSvgIcon('Check_3', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Check_3.svg'));
    this.matIconRegistry.addSvgIcon('Check_vazio', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Check_vazio.svg'));
    this.matIconRegistry.addSvgIcon('clock', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/clock.svg'));
    this.matIconRegistry.addSvgIcon('close_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/close_2.svg'));
    this.matIconRegistry.addSvgIcon('close', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/close.svg'));
    this.matIconRegistry.addSvgIcon('coluna_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/coluna_2.svg'));
    this.matIconRegistry.addSvgIcon('colunas', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/colunas.svg'));
    this.matIconRegistry.addSvgIcon('compartilhar', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/compartilhar.svg'));
    this.matIconRegistry.addSvgIcon('conexao', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/conexao.svg'));
    this.matIconRegistry.addSvgIcon('copy_paste', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/copy_paste.svg'));
    this.matIconRegistry.addSvgIcon('CPF', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/CPF.svg'));
    this.matIconRegistry.addSvgIcon('criar_nova', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/criar_nova.svg'));
    this.matIconRegistry.addSvgIcon('DAE', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/DAE.svg'));
    this.matIconRegistry.addSvgIcon('doc_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/doc_2.svg'));
    this.matIconRegistry.addSvgIcon('Doc', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Doc.svg'));
    this.matIconRegistry.addSvgIcon('down', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/down.svg'));
    this.matIconRegistry.addSvgIcon('download', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/download.svg'));
    this.matIconRegistry.addSvgIcon('editar', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/editar.svg'));
    this.matIconRegistry.addSvgIcon('Email', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Email.svg'));
    this.matIconRegistry.addSvgIcon('enviar', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/enviar.svg'));
    this.matIconRegistry.addSvgIcon('Error', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Error.svg'));
    this.matIconRegistry.addSvgIcon('esconder', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/esconder.svg'));
    this.matIconRegistry.addSvgIcon('etiqueta', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/etiqueta.svg'));
    this.matIconRegistry.addSvgIcon('Falta_de_preenchimento', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Falta_ de _preechimento.svg'));
    this.matIconRegistry.addSvgIcon('filtro', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/filtro.svg'));
    this.matIconRegistry.addSvgIcon('flag', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/flag.svg'));
    this.matIconRegistry.addSvgIcon('foco', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/foco.svg'));
    this.matIconRegistry.addSvgIcon('graph', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/graph.svg'));
    this.matIconRegistry.addSvgIcon('grid', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/grid.svg'));
    this.matIconRegistry.addSvgIcon('help', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/help.svg'));
    this.matIconRegistry.addSvgIcon('home', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/home.svg'));
    this.matIconRegistry.addSvgIcon('image', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/image.svg'));
    this.matIconRegistry.addSvgIcon('layers', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/layers.svg'));
    this.matIconRegistry.addSvgIcon('ligacao_familiar', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/ligacao_familiar.svg'));
    this.matIconRegistry.addSvgIcon('like', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/like.svg'));
    this.matIconRegistry.addSvgIcon('linguagem', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/linguagem.svg'));
    this.matIconRegistry.addSvgIcon('link', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/link.svg'));
    this.matIconRegistry.addSvgIcon('lista', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/lista.svg'));
    this.matIconRegistry.addSvgIcon('lixo', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/lixo.svg'));
    this.matIconRegistry.addSvgIcon('loc', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/loc.svg'));
    this.matIconRegistry.addSvgIcon('lock_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/lock_1.svg'));
    this.matIconRegistry.addSvgIcon('lock', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/lock.svg'));
    this.matIconRegistry.addSvgIcon('max', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/max.svg'));
    this.matIconRegistry.addSvgIcon('medalha', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/medalha.svg'));
    this.matIconRegistry.addSvgIcon('menos_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/menos_1.svg'));
    this.matIconRegistry.addSvgIcon('menos', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/menos.svg'));
    this.matIconRegistry.addSvgIcon('menu', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/menu.svg'));
    this.matIconRegistry.addSvgIcon('moon_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/moon_1.svg'));
    this.matIconRegistry.addSvgIcon('moon', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/moon.svg'));
    this.matIconRegistry.addSvgIcon('Morte', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Morte.svg'));
    this.matIconRegistry.addSvgIcon('não_protegido', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/não_protegido.svg'));
    this.matIconRegistry.addSvgIcon('next_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/next_1.svg'));
    this.matIconRegistry.addSvgIcon('next_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/next_2.svg'));
    this.matIconRegistry.addSvgIcon('pasta', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/pasta.svg'));
    this.matIconRegistry.addSvgIcon('power', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/power.svg'));
    this.matIconRegistry.addSvgIcon('processando_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/processando_1.svg'));
    this.matIconRegistry.addSvgIcon('processando', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/processando.svg'));
    this.matIconRegistry.addSvgIcon('protegido', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/protegido.svg'));
    this.matIconRegistry.addSvgIcon('real', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/real.svg'));
    this.matIconRegistry.addSvgIcon('rumo', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/rumo.svg'));
    this.matIconRegistry.addSvgIcon('save', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/save.svg'));
    this.matIconRegistry.addSvgIcon('search', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/search.svg'));
    this.matIconRegistry.addSvgIcon('selectV', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/selectV.svg'));
    this.matIconRegistry.addSvgIcon('settings', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/settings.svg'));
    this.matIconRegistry.addSvgIcon('smatphone', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/smatphone.svg'));
    this.matIconRegistry.addSvgIcon('Star', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Star.svg'));
    this.matIconRegistry.addSvgIcon('sun', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/sun.svg'));
    this.matIconRegistry.addSvgIcon('Swicht_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Swicht_1.svg'));
    this.matIconRegistry.addSvgIcon('Swicht_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Swicht_2.svg'));
    this.matIconRegistry.addSvgIcon('text', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/text.svg'));
    this.matIconRegistry.addSvgIcon('Tipo73', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/Tipo73.svg'));
    this.matIconRegistry.addSvgIcon('unlock', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/unlock.svg'));
    this.matIconRegistry.addSvgIcon('upload_1', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/upload_1.svg'));
    this.matIconRegistry.addSvgIcon('upload_2_animado', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/upload_2_animado.svg'));
    this.matIconRegistry.addSvgIcon('upload_2', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/upload_2.svg'));
    this.matIconRegistry.addSvgIcon('upload', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/upload.svg'));
    this.matIconRegistry.addSvgIcon('vizualizar', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icon/vizualizar.svg'));
  }
}
