import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { BestSellingBooksComponent } from './pages/best-selling-books/best-selling-books.component';
import { AwardWinningBooksComponent } from './pages/award-winning-books/award-winning-books.component';
import { TeensChildrenCategoryComponent } from './pages/teens-children-category/teens-children-category.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ProgrammingComponent } from './pages/programming/programming.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { RegistrationConfirmationComponent } from './pages/registration-confirmation/registration-confirmation.component';


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
        path: 'programming',
        component: ProgrammingComponent,
      },
      {
        path: 'contact-us',
        component: ContactComponent,
      },
      {
        path: 'pricing',
        component: PricingComponent,
      },
      {
        path: 'auth/verify',
        component: VerifyEmailComponent,
      },
      {
        path: 'registration-success',
        component: RegistrationConfirmationComponent,
      },
      {
        path: 'user-dashboard',
        component: UserDashboardComponent,
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
