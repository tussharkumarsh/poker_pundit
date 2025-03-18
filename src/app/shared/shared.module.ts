import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TickerAdvertisementComponent } from './components/ticker-advertisement/ticker-advertisement.component';
import { LivestreamingComponent } from './components/livestreaming/livestreaming.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TdsReturnComponent } from './components/tds-return/tds-return.component';
import { NewsArticleCardComponent } from './components/news-article-card/news-article-card.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { SafePipeHtml } from './pipes/safe-html.pipe';
import { ToppromotionsComponent } from './components/toppromotions/toppromotions.component';
import { OnlinePokerRoomComponent } from './components/onlinepokerroom/onlinepokerroom.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RankingsComponent,
    OnlinePokerRoomComponent,
    ToppromotionsComponent,
    TournamentsComponent,
    TickerAdvertisementComponent,
    LivestreamingComponent,
    FaqsComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    AboutUsComponent,
    TdsReturnComponent,
    NewsArticleCardComponent,
    DateAgoPipe,
    SafePipe,
    SafePipeHtml
  ],
  imports: [CommonModule, RouterModule, FlexLayoutModule, FormsModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RankingsComponent,
    OnlinePokerRoomComponent,
    ToppromotionsComponent,
    TournamentsComponent,
    TickerAdvertisementComponent,
    LivestreamingComponent,
    NewsArticleCardComponent,
    DateAgoPipe,
    SafePipe,
    SafePipeHtml
  ],
})
export class SharedModule {}
