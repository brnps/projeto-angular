import { Component, OnInit } from '@angular/core';
import {CadastroService} from '../../../servicos/cadastro.service'
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms'
import { Cadastro } from '../../../models/cadastro'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: any;

  constructor(private cadastroService: CadastroService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Id: new FormControl(),
      Nome: new FormControl(),
      Sobrenome: new FormControl(),
      CPF: new FormControl(),
      DataNascimento: new FormControl(),
      CEP: new FormControl(),
      Endereco: new FormControl(),
      Numero: new FormControl(),
      Complemento: new FormControl(),
      Cidade: new FormControl(),
      Estado: new FormControl()
    })
  }

  saveCad(){
    this.cadastroService.saveCad(this.form.value).subscribe()
  }


}
