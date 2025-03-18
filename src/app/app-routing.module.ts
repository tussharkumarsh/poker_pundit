import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { NewsComponent } from './modules/news/news.component';
import { ForumsComponent } from './modules/forums/forums.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './modules/login/login.component';
import { WebsitesComponent } from './modules/websites/websites.component';
import { EventsComponent } from './modules/events/events.component';
import { RankingComponent } from './modules/ranking/ranking.component';
import { LiveComponent } from './modules/live/live.component';
import { ShopComponent } from './modules/shop/shop.component';
import { OffersComponent } from './modules/offers/offers.component';
import { SingleNewsComponent } from './modules/news/single-news/single-news.component';
import { SingleWebsitesComponent } from './modules/websites/single-websites/single-websites.component';
import { SingleLivestreamsComponent } from './modules/live/single-livestreams/single-livestreams.component';
import { SingleProductComponent } from './modules/shop/single-product/single-product.component';
import { ProductCartComponent } from './modules/shop/product-cart/product-cart.component';
import { ProductPaymentComponent } from './modules/shop/product-payment/product-payment.component';
import { FaqsComponent } from './shared/components/faqs/faqs.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './shared/components/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { SingleLivestreamsArticalComponent } from './modules/live/single-livestreams-artical/single-livestreams-artical.component';
import { TdsReturnComponent } from './shared/components/tds-return/tds-return.component';
import { AllNewsComponent } from './modules/news/all-news/all-news.component';
import { SingleToppromotionsComponent } from './shared/components/toppromotions/single-toppromotions/single-toppromotions.component';
import { PaymentConfirmationComponent } from './modules/shop/payment-confirmation/payment-confirmation.component';
import { PaymentSuccessComponent } from './modules/shop/payment-success/payment-success.component';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent,
    children: [
      {
        path: 'main',
        component: HomeComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'news/single/:newsObj',
        component: SingleNewsComponent,
      },
      {
        path: 'news/all',
        component: AllNewsComponent,
      },
      {
        path: 'forums',
        component: ForumsComponent,
      },
      {
        path: 'website',
        component: WebsitesComponent,
      },
      {
        path: 'website/single/:websiteObj',
        component: SingleWebsitesComponent,
      },
      {
        path: 'toppromotions/single/:toppromotionsObj',
        component: SingleToppromotionsComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'offers',
        component: OffersComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'shop/single/:productObj',
        component: SingleProductComponent,
      },
      {
        path: 'shop/cart/:productObj',
        component: ProductCartComponent,
      },
      {
        path: 'shop/cart/payment/:productObj',
        component: ProductPaymentComponent,
      },

      {
        path: 'shop/confirmation',
        component: PaymentConfirmationComponent,
      },

      {
        path: 'shop/success',
        component: PaymentSuccessComponent,
      },

      {
        path: 'live',
        component: LiveComponent,
      },
      {
        path: 'live/single/:videoObj',
        component: SingleLivestreamsArticalComponent,
      },
      // {
      //   path: 'live/single',
      //   component: SingleLivestreamsComponent,
      // },
      {
        path: 'ranking',
        component: RankingComponent,
      },
      {
        path: 'faqs',
        component: FaqsComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'tds-return',
        component: TdsReturnComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
    ],
  },
  {
    path: 'home',
    component: FullwidthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/main',
  },
  {
    path: '**',
    redirectTo: 'home/main',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
