import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
})
export class AllNewsComponent implements OnInit {
  news: any = [];
  sortingByAssending: boolean = true;
  filteredBy:any = 'All'

  constructor(
    private _NewsService: NewsService,
    private _router: Router, 
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAllNews();
    this.stickey();
  }

  getAllNews() {
    this.spinnerService.show();
    this._NewsService
      .getAllWithoutAuthByType('NEWS')
      .subscribe((response: any) => {
        if (response.success) {
          this.spinnerService.hide();
          this.news = response.object.content;
          if (this.sortingByAssending) {
            this.news.sort(
              (a: any, b: any) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            );
          } else {
            this.news.sort(
              (b: any, a: any) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            );
          }
        }
      });
  }

  sortAscending() {
    this.sortingByAssending = true;
    this.ngOnInit();
    this.filteredBy = 'All'
  }
  sortDescending() {
    this.sortingByAssending = false;
    this.ngOnInit();
  }

  stickey() {
    var startProductBarPos = -1;
    window.onscroll = function () {
      var bar = document.getElementById('filter-tab') as HTMLImageElement;
      if (startProductBarPos < 0) startProductBarPos = findPosY(bar);

      if (pageYOffset > startProductBarPos && window.pageYOffset < 3200) {
        bar.style.position = 'fixed';
        bar.style.top = '0';
        bar.style.right = '0';
        bar.style.padding = '1rem 2rem 1rem 14.7rem';
        bar.style.background = '#1f1f1f';
        bar.style.zIndex = '99';
      } else {
        bar.style.position = 'relative';
        bar.style.padding = '0';
      }
    };

    function findPosY(obj: any) {
      var curtop = 0;
      if (typeof obj.offsetParent != 'undefined' && obj.offsetParent) {
        while (obj.offsetParent) {
          curtop += obj.offsetTop;
          obj = obj.offsetParent;
        }
        curtop += obj.offsetTop;
      } else if (obj.y) curtop += obj.y;
      return curtop;
    }
  }

  goToSinglePage(newsObj: any) {
    this._router.navigate(['/home/news/single', newsObj.id]);
  }




  getFilteredFeaturedNews() {
    this.filteredBy = 'Spotlight'
    this._NewsService.getAllWithoutAuthByType('NEWS').subscribe((response: any) => {
        if (response.success) {
          this.news = response.object.content;
          this.news = this.news.filter((newsItem: any) =>
            newsItem.category.includes('Featured')
          );
        }
      });
  }

  getFilteredLatestNews() {
    this.filteredBy = 'Latest'

    this._NewsService.getAllWithoutAuthByType('NEWS').subscribe((response: any) => {
        if (response.success) {
          this.news = response.object.content;
          this.news = this.news.filter((newsItem: any) =>
            newsItem.category.includes('Latest')
          );
        }
      });
  }

  getFilteredTournamentHighlightsNews() {
    this.filteredBy = 'Tournament Highlights'

    this._NewsService.getAllWithoutAuthByType('NEWS').subscribe((response: any) => {
        if (response.success) {
          this.news = response.object.content;
          this.news = this.news.filter((newsItem: any) =>
            newsItem.category.includes('Tournament Highlights')
          );
        }
      });
  }

  getFilteredgiantsNews() {
    this.filteredBy = 'Giants'

    this._NewsService.getAllWithoutAuthByType('NEWS').subscribe((response: any) => {
        if (response.success) {
          this.news = response.object.content;
          this.news = this.news.filter((newsItem: any) =>
            newsItem.category.includes('giants')
          );
        }
      });
  }

  getFilteredWinsNews() {
    this.filteredBy = 'Wins'

    this._NewsService.getAllWithoutAuthByType('NEWS').subscribe((response: any) => {
        if (response.success) {
          this.news = response.object.content;
          this.news = this.news.filter((newsItem: any) =>
            newsItem.category.includes('Wins')
          );
        }
      });
  }

  getFilteredBubblesNews() {
    this.filteredBy = 'Bubbles'

    this._NewsService.getAllWithoutAuthByType('NEWS').subscribe((response: any) => {
        if (response.success) {
          this.news = response.object.content;
          this.news = this.news.filter((newsItem: any) =>
            newsItem.category.includes('Bubbles')
          );
        }
      });
  }


  getFilteredLastToLatest(){
    this.filteredBy = 'Last To Latest'
    this._NewsService.getAllWithoutAuthByType('NEWS').subscribe((response: any) => {
        if (response.success) {
          this.news = response.object.content;
          this.news.sort((a:any, b:any) => b.createdAt - a.createdAt);
        }
      });
  }

  getFilteredLatestToLast(){
    this.filteredBy = 'Latest To Last'
    this._NewsService.getAllWithoutAuthByType('NEWS').subscribe((response: any) => {
        if (response.success) {
          this.news = response.object.content;
          this.news.sort((a:any, b:any) => a.createdAt - b.createdAt);
        }
      });
  }
}
