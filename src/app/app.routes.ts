import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './restaurant-detail/menu/menu.component';
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './security/login/login.component';
import {LoggedInGuard} from './security/loggedin.guard';

import {ProdutosComponent} from './produtos/produtos.component';
import {CarrinhoComponent} from './carrinho/carrinho.component';
import {AdicionaisComponent} from './adicionais/adicionais.component';
import {RegistroComponent} from './registro/registro.component';

export const ROUTES: Routes = [
  //{path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:to', component: LoginComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  
  {path: 'order', loadChildren: './order/order.module#OrderModule',
  canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},

  {path: 'order-summary', component: OrderSummaryComponent},


  {path: '', component: ProdutosComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'adicionais', component: AdicionaisComponent},
  {path: 'pagamento', loadChildren: './pagamento/pagamento.module#PagamentoModule',
  canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
  //{path: 'pagamento', component: PagamentoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'endereco', loadChildren: './endereco/endereco.module#EnderecoModule',
  canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},

  {path: '**', component: NotFoundComponent}
]
