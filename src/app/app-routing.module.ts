import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  /* Esta rota redireciona uma URL que corresponde totalmente ao caminho vazio para a rota cujo caminho é '/dashboard'.

 Depois que o navegador é atualizado, o roteador carrega o DashboardComponent e a barra de endereço do navegador mostra o /dashboardURL.*/

  { path: 'detail/:id', component: HeroDetailComponent }, // rota que corresponde ao padrão de caminho para visualização dos detalhes do herói. Os dois pontos (:) no pathindica que :idé um espaço reservado para um herói específico id.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], /* O método é chamado forRoot()porque você configura o roteador no nível raiz do aplicativo. O forRoot()método fornece os provedores de serviço e as diretivas necessárias para o roteamento e executa a navegação inicial com base na URL do navegador atual.*/
  exports: [RouterModule]
})
export class AppRoutingModule { }