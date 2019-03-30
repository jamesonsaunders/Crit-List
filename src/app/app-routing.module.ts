import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'tos', loadChildren: './pages/tos/tos.module#TosPageModule' },
  { path: 'privacy', loadChildren: './pages/privacy/privacy.module#PrivacyPageModule' },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'crit',
        children: [
          {
            path: '',
            loadChildren: './pages/crit/crit.module#CritPageModule'
          }
        ]
      },
      {
        path: 'later',
        children: [
          {
            path: '',
            loadChildren: './pages/later/later.module#LaterPageModule'
          }
        ]
      },
      {
        path: 'done',
        children: [
          {
            path: '',
            loadChildren: './pages/done/done.module#DonePageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: './pages/profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/crit',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
