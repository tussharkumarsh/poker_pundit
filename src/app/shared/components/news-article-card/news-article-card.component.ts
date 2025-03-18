import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-article-card',
  templateUrl: './news-article-card.component.html',
  styleUrls: ['./news-article-card.component.scss'],
})
export class NewsArticleCardComponent {
  @Input() cardData: any; // Assuming cardData is the data for a single card
}
