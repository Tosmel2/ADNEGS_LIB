import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { BookCollectionsComponent } from './components/book-collections/book-collections.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookSectionComponent } from './components/book-section/book-section.component';

import {RouterLink} from "@angular/router";
import {NgIf, NgForOf, NgClass, NgOptimizedImage} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { BestSellingBooksComponent } from './pages/best-selling-books/best-selling-books.component';
import { AwardWinningBooksComponent } from './pages/award-winning-books/award-winning-books.component';
import { TeensChildrenCategoryComponent } from './pages/teens-children-category/teens-children-category.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { SuccessComponent } from './components/success/success.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ProgrammingComponent } from './pages/programming/programming.component'; 
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    PublicLayoutComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    HeroComponent,
    BookCollectionsComponent,
    FooterComponent,
    BookSectionComponent,
    BestSellingBooksComponent,
    AwardWinningBooksComponent,
    TeensChildrenCategoryComponent,
    BookDetailsComponent,
    ContactComponent,
    PricingComponent,
    NotFoundPageComponent,
    ErrorComponent,
    SuccessComponent,
    UserDashboardComponent,
    ProgrammingComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterLink,
    NgIf,
    NgOptimizedImage,
    NgForOf,
    NgClass,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PublicModule { }
