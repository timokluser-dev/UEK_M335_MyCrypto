import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'ui/tab',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'ui/new',
    loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditPageModule),
  },
  {
    path: 'ui/edit/:key',
    loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditPageModule),
  },
  // Fallback Route to Home
  {
    path: '**',
    redirectTo: '/ui/tab/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
