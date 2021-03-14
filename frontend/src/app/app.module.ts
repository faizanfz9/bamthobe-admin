import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './layout/products/products.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { PageHeaderComponent } from './shared/modules/page-header/page-header.component';
import { StatComponent } from './shared/modules/stat/stat.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        NgbModule
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        DashboardComponent,
        HeaderComponent,
        SidebarComponent,
        ProductsComponent,
        LoginComponent,
        NotFoundComponent,
        StatComponent,
        PageHeaderComponent
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
