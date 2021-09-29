import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/authentification/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/authentification/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/authentification/verify-email/verify-email.module').then(m => m.VerifyEmailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/authentification/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
