import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
declare var $: any;
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
})
export class LiveComponent implements OnInit {
  videos: any = [];
  worldwideVideos: any = [];
  pokerPunditCuratedVideos: any = [];
  allIndiaVideos: any = [];

  waitLoader: boolean = false;

  constructor(
    private _NewsService: NewsService,
    private _router: Router,
    private spinnerService: NgxSpinnerService
  )
  {}

  ngOnInit(): void {
    this.spinnerService.show();
    this.waitLoader = true;

    setTimeout(() => {
      this.waitLoader = false;
      this.spinnerService.hide();
    }, 2000);

    this.getAllVideos();
    this.stickey();
    // First carousel
    $('.carousel1').owlCarousel({
      center: true,
      stagePadding: 200,
      loop: true,
      margin: 20,
      items: 1,
      lazyLoad: true,
      nav: false,
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

    // second
    $('.carousel2').owlCarousel({
      center: true,
      stagePadding: 200,
      loop: true,
      margin: 20,
      items: 1,
      lazyLoad: true,
      nav: false,
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

    $('.prev-btn2').click(function () {
      $('.carousel2').trigger('prev.owl.carousel');
    });

    $('.next-btn2').click(function () {
      $('.carousel2').trigger('next.owl.carousel');
    });

    // second
    $('.carousel3').owlCarousel({
      center: true,
      stagePadding: 200,
      loop: true,
      margin: 20,
      items: 1,
      lazyLoad: true,
      nav: false,
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

    $('.prev-btn3').click(function () {
      $('.carousel3').trigger('prev.owl.carousel');
    });

    $('.next-btn3').click(function () {
      $('.carousel3').trigger('next.owl.carousel');
    });
  }

  getAllVideos() {
    this._NewsService
      .getAllWithoutAuthByType('VIDEOS')
      .subscribe((response: any) => {
        if (response.success) {
          this.videos = response.object.content;
          this.worldwideVideos = this.videos.filter(
            (videoItem: any) => videoItem.category == 'Worldwide'
          );
          this.pokerPunditCuratedVideos = this.videos.filter(
            (videoItem: any) => videoItem.category == 'Poker Pundit Curated'
          );
          this.allIndiaVideos = this.videos.filter(
            (videoItem: any) => videoItem.category == 'All India'
          );

          console.log('this.videos', this.videos);
          console.log('this.worldwideVideos', this.worldwideVideos);
          console.log(
            'this.pokerPunditCuratedVideos',
            this.pokerPunditCuratedVideos
          );
          console.log('this.allIndiaVideos', this.allIndiaVideos);
        }
      });
  }

  customOptionsworldwideVideos: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
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

  customOptionsAllIndiaVideos: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
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

  customOptionsPokerPunditCuratedVideos: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
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

  goToSinglePage(videoObj: any) {
    this._router.navigate(['/home/live/single', videoObj.id]);
  }



  stickey() {
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
        window.pageYOffset < 1200
      ) {
        bar.style.position = 'fixed';
        bar.style.top = '-22px';
        bar.style.right = '0';
        bar.style.padding = '0rem 2rem 0rem 3.5rem',
        bar1.style.padding = '0rem 5.5rem 0rem 1rem'
        bar1.style.height = '100vh';

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
