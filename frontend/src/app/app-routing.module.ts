import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './layout/products/products.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'products', component: ProductsComponent}
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
