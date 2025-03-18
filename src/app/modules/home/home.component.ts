import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Clipboard } from '@angular/cdk/clipboard';

import {
  Articles,
  AddCard,
  RiverTransferRankings,
  Tournaments,
} from 'src/app/models/shared.model';
import { NewsService } from 'src/app/service/news.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles!: Articles[];
  addCards!: AddCard[];
  riverTransferRankings!: RiverTransferRankings[];
  tournaments!: Tournaments[];
  @ViewChild('owlCarousel')
  owlCarouselRef!: ElementRef;
  owlCarousel: any;
  prevBtnDisabled: boolean = true;
  nextBtnDisabled: boolean = false;
  selectedButton: string = 'Weekly';

  news: any = [];
  featuredNews: any = [];
  slicedFeaturedNews: any = [];
  latestNews: any = [];
  tournamentHighlightsNews: any = [];
  giantsNews: any = [];
  winsNews: any = [];
  bubblesNews: any = [];
  typeSelected = 'ball-fussion';

  videos: any = [];
  livestreamingVideos: any = [];
  websites: any = [];
  advertising: any = [];
  onlinePokerRooms: any = [];
  tournament: any = [];
  tournamentCategory1: any = [];
  tournamentCategory2: any = [];
  tournamentCategory3: any = [];
  tournamentCategory4: any = [];
  waitLoader: boolean = false;

  constructor(
    private _NewsService: NewsService,
    private _router: Router,
    private spinnerService: NgxSpinnerService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();
    this.waitLoader = true;
    setTimeout(() => {
      this.waitLoader = false;
      this.spinnerService.hide();
    }, 2000);

    this.getAllNews();
    this.getAllVideos();
    this.getAllWebsite();
    this.getAllTournament();
    this.getAllAdvertising();
    this.getAllOnlinePokerRooms();
    this.articles = [
      {
        imges: 'assets/img/artical.png',
        description:
          'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
        author: 'PokerPundit',
        creatAt: '3 hours ago',
      },
      {
        imges: 'assets/img/artical1.png',
        description:
          'MPL Poker’s Cash Bash & Daily Bash Promotions Can Earn You Up To 100% Rakeback in February',
        author: 'PokerPundit',
        creatAt: '3 hours ago',
      },
      {
        imges: 'assets/img/artical2.png',
        description:
          'MPL Poker’s Cash Bash & Daily Bash Promotions Can Earn You Up To 100% Rakeback in February',
        author: 'PokerPundit',
        creatAt: '3 hours ago',
      },
      {
        imges: 'assets/img/artical3.png',
        description:
          'MPL Poker’s Cash Bash & Daily Bash Promotions Can Earn You Up To 100% Rakeback in February',
        author: 'PokerPundit',
        creatAt: '3 hours ago',
      },
    ];

    this.addCards = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
      {
        id: 6,
      },
      {
        id: 7,
      },
      {
        id: 8,
      },
      // {
      //   id: 9,
      // },
      // {
      //   id: 10,
      // },
    ];

    this.tournaments = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ];

    // First carousel
    $('.carousel1').owlCarousel({
      center: true,
      stagePadding: 200,
      loop: true,
      margin: 20,
      items: 1,
      lazyLoad: true,
      nav: false,
      autoplay: true,
      autoplaySpeed: 1500,
      mobileFirst: true,
      // nav: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 60,
        },
        600: {
          items: 1,
          stagePadding: 100,
        },
        1000: {
          items: 1,
          stagePadding: 200,
        },
        1200: {
          items: 1,
          stagePadding: 250,
        },
        1400: {
          items: 1,
          stagePadding: 160,
        },
        1600: {
          items: 1,
          stagePadding: 350,
        },
        1800: {
          items: 1,
          stagePadding: 400,
        },
      },
    });

    $('.prev-btn1').click(function () {
      $('.carousel1').trigger('prev.owl.carousel');
    });

    $('.next-btn1').click(function () {
      $('.carousel1').trigger('next.owl.carousel');
    });
    // Second carousel
    $('.carousel2').owlCarousel({
      items: 3,
      loop: true,
      margin: 50,
      responsiveClass: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 1800,
      mobileFirst: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
          loop: true,
        },
      },
    });

    $('.prev-btn2').click(function () {
      $('.carousel2').trigger('prev.owl.carousel');
    });

    $('.next-btn2').click(function () {
      $('.carousel2').trigger('next.owl.carousel');
    });

    $('.carousel3').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplaySpeed: 700,
      autoplayTimeout: 2400,
      mobileFirst: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    $('.carousel4').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplaySpeed: 1400,
      mobileFirst: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  getAllNews() {
    // this.spinnerService.show();
    this._NewsService
      .getAllWithoutAuthByType('NEWS')
      .subscribe((response: any) => {
        if (response.success) {
          this.news = response.object.content;
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

          this.slicedFeaturedNews = this.featuredNews.slice(2, 5);
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
          console.log('slicedFeaturedNews', this.slicedFeaturedNews);
        }
      });
  }

  getAllVideos() {
    this._NewsService
      .getAllWithoutAuthByType('VIDEOS')
      .subscribe((response: any) => {
        if (response.success) {
          this.videos = response.object.content;
          console.log('---this.videos', this.videos);
          this.livestreamingVideos = this.videos.filter((videoItem: any) =>
            videoItem.category.includes('Livestreaming')
          );
          console.log('livestreamingVideos', this.livestreamingVideos);
        }
      });
  }

  getAllWebsite() {
    this._NewsService
      .getAllWithoutAuthByType('WEBSITE')
      .subscribe((response: any) => {
        if (response.success) {
          this.websites = response.object.content;
          console.log('-----this.websites', this.websites);
        }
      });
  }

  getAllAdvertising() {
    this._NewsService
      .getAllWithoutAuthByType('ADVERTISING')
      .subscribe((response: any) => {
        if (response.success) {
          this.advertising = response.object.content;
          console.log('-----this.advertising', this.advertising);
        }
      });
  }

  getAllOnlinePokerRooms() {
    this._NewsService
      .getAllWithoutAuthByType('POKER_ROOM')
      .subscribe((response: any) => {
        if (response.success) {
          this.onlinePokerRooms = response.object.content;
          console.log('-----this.onlinePokerRooms', this.onlinePokerRooms);
        }
      });
  }

  getAllTournament() {
    this._NewsService
      .getAllWithoutAuthByType('TOURNAMENT')
      .subscribe((response: any) => {
        if (response.success) {
          this.tournament = response.object.content;
          this.tournamentCategory1 = this.tournament.filter(
            (categoryItem: any) => categoryItem.category == 'tournament-1'
          );
          this.tournamentCategory2 = this.tournament.filter(
            (categoryItem: any) => categoryItem.category == 'tournament-2'
          );
          this.tournamentCategory3 = this.tournament.filter(
            (categoryItem: any) => categoryItem.category == 'tournament-3'
          );
          this.tournamentCategory4 = this.tournament.filter(
            (categoryItem: any) => categoryItem.category == 'tournament-4'
          );

          console.log('-----this.tournament', this.tournament);
        }
      });
  }

  goToSinglePage(videoObj: any) {
    this._router.navigate(['/home/live/single', videoObj.id]);
  }

  goToSingleNewsPage(newsObj: any) {
    this._router.navigate(['/home/news/single', newsObj.id]);
  }

  goToSinglePageWebsite(websiteObj: any) {
    this._router.navigate(['/home/website/single', websiteObj.id]);
  }

  customOptionsVideos: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 20,
    items: 2,
    autoplaySpeed: 1000,
    nav: true,
    navText: [
      "<img src='./assets/img/left-arrow.png' width='20px' alt=''>",
      "<img src='./assets/img/right-arrow.png' width='20px' alt=''>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  customOptionsWebsite: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 20,

    items: 3,
    // margin: 50,
    // responsiveClass: true,

    autoplaySpeed: 1000,
    nav: false,
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
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  customOptionsWebsiteCarousel1: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    margin: 20,

    items: 1,
    // margin: 50,
    // responsiveClass: true,

    autoplaySpeed: 1000,
    nav: false,
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
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  customOptionsWebsiteCarousel2: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    margin: 20,

    items: 1,
    // margin: 50,
    // responsiveClass: true,

    autoplaySpeed: 500,
    nav: false,
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
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  customOptionsWebsiteCarousel3: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    margin: 20,

    items: 1,
    // margin: 50,
    // responsiveClass: true,

    autoplaySpeed: 500,
    nav: false,
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
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  customOptionsWebsiteCarousel4: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    margin: 20,

    items: 1,
    // margin: 50,
    // responsiveClass: true,

    autoplaySpeed: 500,
    nav: false,
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
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  copyText(text: any) {
    this.showtoast();
    this.clipboard.copy(text);
  }

  showtoast() {
    var toastMixin: any = Swal.mixin({
      toast: true,
      icon: 'success',
      title: 'General Title',
      position: 'center',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    toastMixin.fire({
      animation: true,
      title: 'Link copied',
    });
  }
}
