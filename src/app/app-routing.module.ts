import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './components/layouts/user-layout/user-layout.component';
import { BlankLayoutComponent } from './components/layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { MemberCardComponent } from './@shared/member-card/member-card.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: BlankLayoutComponent,
      children: [{ path: '', loadChildren: () => import('./views/pages/pages.module').then((m) => m.PagesModule) }],
    },

    {
      path: 'auth',
      component: AuthLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./views/auth/auth.module').then((m) => m.AuthModule),
        },
      ],
    },
    {
      path: 'admin',
      component: AdminLayoutComponent,
      children: [
        {
          path: 'posts',
          loadChildren: () => import('./views/posts/posts.module').then((m) => m.PostsModule),
        },
      ],
    },
    {
      path: 'user',
      component: UserLayoutComponent,
      children: [
        {
          path: 'notes',
          loadChildren: () => import('./views/notes/notes.module').then((m) => m.NotesModule),
        },
      ],
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
