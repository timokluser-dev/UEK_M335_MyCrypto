import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'ui/edit/:key',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditPageModule),
  },
  {
    path: 'ui/new',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditPageModule),
  },
  // Fallback Route to Home
  {
    path: '**',
    redirectTo: '/ui/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
