import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
}, {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
},
{
    path: 'store',
    loadChildren: () => import('./modules/store/store.module').then((m) => m.StoreModule)
},
{
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
