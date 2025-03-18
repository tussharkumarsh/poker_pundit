import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { Articles } from 'src/app/models/shared.model';
import { NewsService } from 'src/app/service/news.service';
declare var $: any;
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, AfterViewInit {
  @ViewChild('cardContainer') cardContainer!: ElementRef;
  articles!: Articles[];
  @ViewChild('owlCarousel')
  owlCarouselRef!: ElementRef;
  owlCarousel: any;
  prevBtnDisabled: boolean = true;
  nextBtnDisabled: boolean = false;
  cards: any[] = [];
  loading: boolean = false;
  currentPage: number = 0;
  itemsPerPage: number = 3;
  cardsToRender: any[] = [];

  news: any = [];
  featuredNews: any = [];
  latestNews: any = [];
  tournamentHighlightsNews: any = [];
  giantsNews: any = [];
  winsNews: any = [];
  bubblesNews: any = [];
  typeSelected = 'ball-fussion';
  constructor(
    private _NewsService: NewsService,
    private _router: Router,
    private spinnerService: NgxSpinnerService,
    private _CategoryService: CategoryService
    ) // 
  {}

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

  waitLoader: boolean = false;
  waitLoaderNews: boolean = false;
  ngOnInit() {
    this.waitLoader = true;
    this.spinnerService.show();

    setTimeout(() => {
      this.waitLoader = false;
      this.spinnerService.hide();
    }, 2000);
    this.getAllCategory()
    this.getAllNews();
    this.stickey();
    // this.filterWithName()

    setTimeout(() => {
      this.waitLoaderNews = true;
      this.filterWithName()
      // this.spinnerService.hide();
    }, 2000);
  }

  getAllNews() {
    // this.spinnerService.show();
    this._NewsService
      .getAllWithoutAuthByType('NEWS')
      .subscribe((response: any) => {
        if (response.success) {
          this.news = response.object.content;
          // this.featuredNews = this.news.filter((newsItem: any) => newsItem.category == 'Featured');
          // this.latestNews = this.news.filter((newsItem: any) => newsItem.category == 'Latest');
          // this.tournamentHighlightsNews = this.news.filter((newsItem: any) => newsItem.category == 'Tournament Highlights');
          // this.giantsNews = this.news.filter((newsItem: any) => newsItem.category == 'giants');
          // this.winsNews = this.news.filter((newsItem: any) => newsItem.category == 'Wins');
          // this.bubblesNews = this.news.filter((newsItem: any) => newsItem.category == 'Bubbles');
          this.featuredNews = this.news.filter((newsItem: any) =>
            newsItem.category.includes('Featured')
          );
          this.latestNews = this.news.filter((newsItem: any) =>
            newsItem.category.includes('Latest')
          );
          this.tournamentHighlightsNews = this.news.filter((newsItem: any) =>
            newsItem.category.includes('Tournament Highlights')
          );
          this.giantsNews = this.news.filter((newsItem: any) =>
            newsItem.category.includes('giants')
          );
          this.winsNews = this.news.filter((newsItem: any) =>
            newsItem.category.includes('Wins')
          );
          this.bubblesNews = this.news.filter((newsItem: any) =>
            newsItem.category.includes('Bubbles')
          );
          // this.spinnerService.hide();
          console.log('this.news', this.news);
          console.log('this.featuredNews', this.featuredNews);
          console.log('this.latestNews', this.latestNews);
          console.log(
            'this.tournamentHighlightsNews',
            this.tournamentHighlightsNews
          );
          console.log('this.giantsNews', this.giantsNews);
          console.log('this.bubblesNews', this.bubblesNews);
          console.log('this.winsNews', this.winsNews);
        }
      });
  }

  customOptionsLatest: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 20,

    items: 2,
    // margin: 50,
    // responsiveClass: true,

    autoplaySpeed: 1000,
    nav: true,
    // navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    navText: [
      "<img src='./assets/img/left-arrow.png' width='20px' alt=''>",
      "<img src='./assets/img/right-arrow.png' width='20px' alt=''>",
    ],
    // mobileFirst: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  customOptionsTournament: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 20,

    items: 2,
    // margin: 50,
    // responsiveClass: true,

    autoplaySpeed: 1000,
    nav: true,
    // navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    navText: [
      "<img src='./assets/img/left-arrow.png' width='20px' alt=''>",
      "<img src='./assets/img/right-arrow.png' width='20px' alt=''>",
    ],
    // mobileFirst: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  customOptionsGiants: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 20,

    items: 2,
    // margin: 50,
    // responsiveClass: true,

    autoplaySpeed: 1000,
    nav: true,
    // navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    navText: [
      "<img src='./assets/img/left-arrow.png' width='20px' alt=''>",
      "<img src='./assets/img/right-arrow.png' width='20px' alt=''>",
    ],
    // mobileFirst: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  customOptionsWins: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 20,

    items: 2,
    // margin: 50,
    // responsiveClass: true,

    autoplaySpeed: 1000,
    nav: true,
    // navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    navText: [
      "<img src='./assets/img/left-arrow.png' width='20px' alt=''>",
      "<img src='./assets/img/right-arrow.png' width='20px' alt=''>",
    ],
    // mobileFirst: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  customOptionsBubbles: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 20,

    items: 2,
    // margin: 50,
    // responsiveClass: true,

    autoplaySpeed: 1000,
    nav: true,
    // navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    navText: [
      "<img src='./assets/img/left-arrow.png' width='20px' alt=''>",
      "<img src='./assets/img/right-arrow.png' width='20px' alt=''>",
    ],
    // mobileFirst: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  newsObj: any = {};

  goToSinglePage(newsObj: any) {
    this._router.navigate(['/home/news/single', newsObj.id]);
  }



  categoriesList:any = []
  modifiedData:any = {}
  getAllCategory() {
    this._CategoryService.getAll().subscribe((response: any) => {
      if (response) {
        this.categoriesList = response;
        this.categoriesList = this.categoriesList.filter((item:any) => item.name.startsWith('News'));
        console.log("categoriesList--------",this.categoriesList)
        this.modifiedData = this.categoriesList.map((item:any) => {
          item.name = item.name.replace("News ", ""); // Remove "Product " from the name
          return item;
        });
        console.log("modifiedData-----",this.modifiedData)
      }
    })
  }


  filterNewsData:any = []

  getAllNewsWithFilter(filterCategory:any) {
    this._NewsService.getAllWithoutAuthByType('NEWS').subscribe((response: any) => {
        if (response.success) {
          // this.news = response.object.content;

          let latestNews1 = response.object.content.filter((newsItem: any) =>
            newsItem.category.includes(filterCategory)
          );

          for(let i=0; i< latestNews1.length; i++){
            latestNews1[i].selectedCategoryIs = filterCategory
          }

          this.filterNewsData.selectedCategoryIs = filterCategory
          this.filterNewsData.push(latestNews1)

          console.log('filter -------- ', latestNews1);
        }
      });

      console.log("this.filterNewsData",this.filterNewsData)
  }


  filterWithName(){

    for(let i=0; i< this.modifiedData.length; i++){
      console.log("this.modifiedData",this.modifiedData[i].name, '-----------' + i)

      this.getAllNewsWithFilter(this.modifiedData[i].name)
    }


  }



  pageHeightOfWindow:any

  stickey() {
    let pageHeightOfWindow = this.pageHeightOfWindow + 500
    console.log("---------------pageHeightOfWindow",pageHeightOfWindow)
    var startProductBarPos = -1;
    window.onscroll = function () {
      var bar = document.getElementById('stickey-page') as HTMLImageElement;
      var bar1 = document.getElementById(
        'stickey-page-container'
      ) as HTMLImageElement;
      if (startProductBarPos < 0) startProductBarPos = findPosY(bar);

      console.log('pageYOffset', pageYOffset);
      if (
        window.pageYOffset > startProductBarPos &&
        window.pageYOffset < 2400
      ) {
        bar.style.position = 'fixed';
        bar.style.top = '-22px';
        bar.style.right = '0';
        bar.style.padding = '0rem 2rem 0rem 3.5rem';
        bar1.style.padding = '0rem 5.5rem 0rem 1rem';

        // bar1.style.top = '0',
        // bar1.style.position = 'absolute';
      } else {
        bar.style.position = 'relative';
        bar.style.padding = '0';
        bar.style.bottom = '0';
        (bar1.style.bottom = '0'), (bar1.style.position = 'absolute');
        bar1.style.padding = '0rem 0rem 0rem 1rem';
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
}
