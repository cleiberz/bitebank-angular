import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //exatamente o que aparece na tela.
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService){}


  }
