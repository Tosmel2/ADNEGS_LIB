import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { BookCollectionsComponent } from './components/book-collections/book-collections.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookSectionComponent } from './components/book-section/book-section.component';

import {RouterLink} from "@angular/router";
import {NgIf, NgForOf, NgClass, NgOptimizedImage} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { BestSellingBooksComponent } from './components/best-selling-books/best-selling-books.component';
import { AwardWinningBooksComponent } from './components/award-winning-books/award-winning-books.component';
import { TeensChildrenCategoryComponent } from './components/teens-children-category/teens-children-category.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { SuccessComponent } from './components/success/success.component'; 


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
    SuccessComponent
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
    ReactiveFormsModule
  ]
})
export class PublicModule { }
