import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { ForumsComponent } from './modules/forums/forums.component';
import { WebsitesComponent } from './modules/websites/websites.component';
import { EventsComponent } from './modules/events/events.component';
import { OffersComponent } from './modules/offers/offers.component';
import { ShopComponent } from './modules/shop/shop.component';
import { LiveComponent } from './modules/live/live.component';
import { RankingComponent } from './modules/ranking/ranking.component';
import { SingleNewsComponent } from './modules/news/single-news/single-news.component';
import { SingleWebsitesComponent } from './modules/websites/single-websites/single-websites.component';
import { SingleLivestreamsComponent } from './modules/live/single-livestreams/single-livestreams.component';
import { SingleProductComponent } from './modules/shop/single-product/single-product.component';
import { ProductCartComponent } from './modules/shop/product-cart/product-cart.component';
import { ProductPaymentComponent } from './modules/shop/product-payment/product-payment.component';
import { SingleRankingComponent } from './modules/ranking/single-ranking/single-ranking.component';
import { SharedModule } from './shared/shared.module';
import { SingleLivestreamsArticalComponent } from './modules/live/single-livestreams-artical/single-livestreams-artical.component';
import { AllNewsComponent } from './modules/news/all-news/all-news.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SingleToppromotionsComponent } from './shared/components/toppromotions/single-toppromotions/single-toppromotions.component';
import { PaymentConfirmationComponent } from './modules/shop/payment-confirmation/payment-confirmation.component';
import { PaymentSuccessComponent } from './modules/shop/payment-success/payment-success.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ForumsComponent,
    WebsitesComponent,
    EventsComponent,
    OffersComponent,
    ShopComponent,
    LiveComponent,
    RankingComponent,
    SingleNewsComponent,
    AllNewsComponent,
    SingleWebsitesComponent,
    SingleToppromotionsComponent,
    SingleLivestreamsComponent,
    SingleProductComponent,
    ProductCartComponent,
    ProductPaymentComponent,
    PaymentConfirmationComponent,
    PaymentSuccessComponent,
    SingleRankingComponent,
    SingleLivestreamsArticalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    SharedModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule
  ],
})
export class AppModule {}
