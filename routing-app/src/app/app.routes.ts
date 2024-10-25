import { Routes } from '@angular/router';
// import { Page01Component } from './pages/page-01/page-01.component';
// import { Page02Component } from './pages/page-02/page-02.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { yourGuardGuard } from './your-guard.guard';

export const routes: Routes = [
  // {path:"page01",component:Page01Component},
  {
    path: 'page01',
    loadComponent: () =>
      import('./pages/page-01/page-01.component').then((c) => c.Page01Component),
  },
  {
    path: 'page02',
    canActivate:[yourGuardGuard],
    loadComponent: () =>
      import('./pages/page-02/page-02.component').then((c) => c.Page02Component),
  },
//   { path: 'page02', component: Page02Component },
  { path: '', redirectTo: 'page01', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
