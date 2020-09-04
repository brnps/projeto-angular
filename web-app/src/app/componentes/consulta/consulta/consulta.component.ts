import { Component, OnInit } from '@angular/core';
import {CadastroService} from '../../../servicos/cadastro.service'
import { Cadastro } from '../../../models/cadastro'


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  
  cad = {} as Cadastro;
  cads: Cadastro[];

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
      this.getCad();
} 

  getCad() {
    this.cadastroService.getTodos().subscribe(res => {
      this.cads = res
    })
  }

  deleteCad(cad: Cadastro) {
    this.cadastroService.deleteCad(cad).subscribe(() => {
      this.getCad();
    });
  }

  
}

