import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CountToModule } from 'angular-count-to';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgotComponent } from './account/forgot/forgot.component';
import { MainComponent } from './main-components/main/main.component';
import { AboutComponent } from './main-components/about/about.component';
import { PricingComponent } from './main-components/pricing/pricing.component';
import { ContactComponent } from './main-components/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CounterComponent } from './sub-components/counter/counter.component';
import { PricingCardComponent } from './sub-components/pricing-card/pricing-card.component';
import { PricingSectionComponent } from './sub-components/pricing-section/pricing-section.component';
import { FooterComponent } from './sub-components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubHeaderComponent } from './sub-components/sub-header/sub-header.component';
import { JoinUsComponent } from './sub-components/join-us/join-us.component';
import { isMobileDirective } from './directives/is-mobile.directive';
import { isDesktopDirective } from './directives/is-desktop.directive';
import { StickyBottomComponent } from './sub-components/sticky-bottom/sticky-bottom.component';
import { ContactFormComponent } from './sub-components/contact-form/contact-form.component';
import { TestComponent } from './test/test.component';
import { TableComponent } from './sub-components/table/table.component';
import { DatepickerComponent } from './sub-components/datepicker/datepicker.component';

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    MainComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    NavbarComponent,
    CounterComponent,
    PricingCardComponent,
    PricingSectionComponent,
    FooterComponent,
    SubHeaderComponent,
    JoinUsComponent,
    isMobileDirective,
    isDesktopDirective,
    StickyBottomComponent,
    ContactFormComponent,
    TestComponent,
    TableComponent,
    DatepickerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CountToModule,
    MatMomentDateModule,
    MatNativeDateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
