// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/details/:id', component: DetailsComponent }, // Add the details route
  {path: 'map', component: MapComponent },
  {path: 'login', component: LoginComponent },
  {path: 'profile/:user', component: ProfileComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
