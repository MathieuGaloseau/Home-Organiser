import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAddObject } from './pages/add-object/app.add-object';
import { AppHome } from './pages/home/app.home';
import { AppSearch } from './pages/search/app.search';
import { AppFav } from './pages/fav/app.fav';

const routes: Routes = [
  { path: 'home', component: AppHome },
  { path: 'add-object', component: AppAddObject },
  { path: 'search', component: AppSearch },
  { path: 'favorite', component: AppFav },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
