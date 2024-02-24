import { Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { EditeComponent } from './pages/edite/edite.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContainerComponent } from './pages/container/container.component';
import { isLogginGuard } from './guards/is-loggin.guard';

export const routes: Routes = [
    
    { path: '', loadComponent : () => import('./pages/login/login.component').then(s=>s.LoginComponent)},
    {path: 'container', canActivate : [isLogginGuard],loadComponent : () => import('./pages/container/container.component').then(c=>c.ContainerComponent) , title: 'Home'},
    // {path: 'products/details/:id' , loadComponent : ()=> import('./pages/details/details.component').then(d=>d.DetailsComponent) , title : 'Details'},
    { path: 'details/:id', component: DetailsComponent, title: 'Product Details' },
    {path: 'edit/:id' , loadComponent : ()=> import('./pages/edite/edite.component').then(e=>e.EditeComponent) , title : 'Edit'},
    {path: '**' , component:PageNotFoundComponent  ,title : 'Not Found'},
];
