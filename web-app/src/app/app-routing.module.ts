import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastroComponent} from './componentes/cadastro/cadastro/cadastro.component'
import {ConsultaComponent} from './componentes/consulta/consulta/consulta.component'

const routes: Routes = [
  {path: 'cadastro/cadastro', component: CadastroComponent},
  {path: 'consulta/consulta', component: ConsultaComponent},
  {path: '', component: ConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
