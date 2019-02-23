import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tos', loadChildren: './tos/tos.module#TosPageModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'crit',
        children: [
          {
            path: '',
            loadChildren: './crit/crit.module#CritPageModule'
          }
        ]
      },
      {
        path: 'later',
        children: [
          {
            path: '',
            loadChildren: './later/later.module#LaterPageModule'
          }
        ]
      },
      {
        path: 'done',
        children: [
          {
            path: '',
            loadChildren: './done/done.module#DonePageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: './profile/profile.module#ProfilePageModule'
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
