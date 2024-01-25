import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BestSellingBooksComponent } from './components/best-selling-books/best-selling-books.component';
import { AwardWinningBooksComponent } from './components/award-winning-books/award-winning-books.component';
import { TeensChildrenCategoryComponent } from './components/teens-children-category/teens-children-category.component';
import { ContactComponent } from './components/contact/contact.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children:[
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
      {
        path: 'best-selling-books',
        component: BestSellingBooksComponent,
      },
      {
        path: 'award-winning-books',
        component: AwardWinningBooksComponent,
      },
      {
        path: 'teens-children-category',
        component: TeensChildrenCategoryComponent,
      },
      {
        path: 'contact-us',
        component: ContactComponent,
      },
      {
        path: 'pricing',
        component: PricingComponent,
      },
      { path: '**', component: NotFoundPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
