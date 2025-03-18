import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Articles, User } from 'src/app/models/shared.model';
declare var $: any;
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/service/news.service';
import { Clipboard } from '@angular/cdk/clipboard';
import Swal from 'sweetalert2';
import { DomSanitizer, Meta, SafeHtml } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss'],
})
export class SingleNewsComponent implements OnInit {
  articles!: Articles[];
  users!: User[];

  @ViewChild('owlCarousel')
  owlCarouselRef!: ElementRef;
  owlCarousel: any;
  prevBtnDisabled: boolean = true;
  nextBtnDisabled: boolean = false;
  newsId: any
  shareonFacebook: any = ''
  shareonTwitter: any = ''
  shareonWhatsapp: any = ''
  selectedObjects: any[] = [];
  pageHeightOfWindow: any

  typeSelected = 'ball-fussion';

  constructor(
    private route: ActivatedRoute,
    private _NewsService: NewsService,
    private router: Router,
    private clipboard: Clipboard,
    private sanitizer: DomSanitizer,
    private _router: Router,
    private spinnerService: NgxSpinnerService,

    private metaService: Meta,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }


  waitLoader: boolean = false;
  waitLoaderNews: boolean = false;

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.waitLoader = true;
    this.spinnerService.show();

    setTimeout(() => {
      this.waitLoader = false;
      this.spinnerService.hide();
    }, 2000);

    this.newsId = this.route.snapshot.paramMap.get('newsObj');
    console.log("this.newsId", this.newsId)
    this.getNews(this.newsId)


    // this.metaService.updateTag({ property: 'og:title', content: 'my hardcode page' });
    // this.metaService.updateTag({ property: 'og:description', content: 'my hardcode Page description...' });
    // this.metaService.updateTag({ property: 'og:image', content: 'https://pokerpundit.in/assets/side-bar-img/new_poker_logo.svg' });



    // this.stickey()
    this.articles = [
      {
        id: 1,
        imges: 'assets/img/artical4.png',
        description:
          'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
        author: 'PokerPundit',
        creatAt: '3 hours ago',
      },
      {
        id: 2,
        imges: 'assets/img/artical1.png',
        description:
          'MPL Poker’s Cash Bash & Daily Bash Promotions Can Earn You Up To 100% Rakeback in February',
        author: 'PokerPundit',
        creatAt: '3 hours ago',
      },
      {
        id: 3,
        imges: 'assets/img/artical2.png',
        description:
          'MPL Poker’s Cash Bash & Daily Bash Promotions Can Earn You Up To 100% Rakeback in February',
        author: 'PokerPundit',
        creatAt: '3 hours ago',
      },
      {
        id: 4,
        imges: 'assets/img/artical3.png',
        description:
          'MPL Poker’s Cash Bash & Daily Bash Promotions Can Earn You Up To 100% Rakeback in February',
        author: 'PokerPundit',
        creatAt: '3 hours ago',
      },
    ];

    this.users = [
      {
        id: 1,
        profile_img: 'assets/img/user_profile_img.jpg',
        name: 'Gaurav Sood',
      },
      {
        id: 2,
        profile_img: 'assets/img/user_profile_img.jpg',
        name: 'Aman Bhadu',
      },
      {
        id: 3,
        profile_img: 'assets/img/user_profile_img.jpg',
        name: 'Amit Kaushik',
      },
      {
        id: 4,
        profile_img: 'assets/img/user_profile_img.jpg',
        name: 'Vidwath Shetty',
      },
      {
        id: 5,
        profile_img: 'assets/img/user_profile_img.jpg',
        name: 'Aditya N.G.',
      },
      {
        id: 6,
        profile_img: 'assets/img/user_profile_img.jpg',
        name: 'Srikanth Narayan',
      },
      {
        id: 7,
        profile_img: 'assets/img/user_profile_img.jpg',
        name: 'Armaan Khan',
      },
      {
        id: 8,
        profile_img: 'assets/img/user_profile_img.jpg',
        name: 'Rupam Thakur',
      },
    ];



    // Second carousel
    // $('#carousel2').owlCarousel({
    //   items: 2,
    //   loop: true,
    //   margin: 10,
    //   responsiveClass: true,
    //   dots: false,
    //   autoplay: true,
    //   autoplaySpeed: 1000,
    //   // mobileFirst: true,
    //   responsive: {
    //     0: {
    //       items: 2,
    //     },
    //     600: {
    //       items: 2,
    //     },
    //     1000: {
    //       items: 2,
    //     },
    //     loop: true,
    //   },
    // });

    // $('.prev-btn2').click(function () {
    //   $('.carousel2').trigger('prev.owl.carousel');
    // });

    // $('.next-btn2').click(function () {
    //   $('.carousel2').trigger('next.owl.carousel');
    // });



    setTimeout(function(){ 
      $('.carousel2').owlCarousel({
          loop: true,
          nav: true,
          dots: true,
          autoplayHoverPause: true,
          autoplay: true,
          margin: 30,
          navText: [
              "<i class='bx bx-chevron-left'></i>",
              "<i class='bx bx-chevron-right'></i>"
          ],
          responsive: {
              0: {
                  items: 2,
              },
              576: {
                  items: 2,
              },
              768: {
                  items: 2,
              },
              992: {
                  items: 2,
              }
          }
      });
      }, 2000);


  }


  @ViewChild('pageContainer', { static: false })
  pageContainer!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.calculatePageHeight();
      // alert("ss") 
    }, 4000);
  }

  calculatePageHeight(): void {
    const containerElement = this.pageContainer.nativeElement;
    this.pageHeightOfWindow = containerElement.scrollHeight;
    console.log('Page Height:', this.pageHeightOfWindow);
    this.stickey()
  }


  trackById(index: number, value: Articles) {
    return value.id;
  }

  goToSinglePage(newsObj: any) {
    this._router.navigate(['/home/news/single', newsObj.id]);

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }


  stickey() {
    let pageHeightOfWindow = this.pageHeightOfWindow - 500
    // console.log("---------------pageHeightOfWindow",pageHeightOfWindow)
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
        window.pageYOffset < pageHeightOfWindow
      ) {
        bar.style.position = 'fixed',
          bar.style.top = '-22px',
          bar.style.right = '0';
        bar.style.padding = '0rem 2rem 0rem 3.5rem',
          bar1.style.padding = '0rem 5.5rem 0rem 1rem'
        bar1.style.height = '100vh'


        // bar1.style.top = '0',
        // bar1.style.position = 'absolute';
      } else {
        bar.style.position = 'relative',
          bar.style.padding = '0',
          bar.style.bottom = '0',
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

  newsObj: any
  getNews(newsObj: any) {
    this._NewsService.getById(newsObj).subscribe((response: any) => {
      if (response.success) {
        console.log("response news obj", response)
        this.newsObj = response.object
        this.getAllNews()
      }
    })
  }

  timerInterval: any
  copyRouteLink() {
    let fullRouteURL: any = 'https://pokerpundit.in/' + this.router.url
    this.clipboard.copy(fullRouteURL);

    Swal.fire({
      imageUrl: './assets/img/link-copy.png',
      imageWidth: 320,
      imageHeight: 40,
      imageAlt: 'Custom image',
      timer: 5000,
      willClose: () => {
        clearInterval(this.timerInterval)
      }
    });
    // this.showtoast()
  }


  copyRouteLinkFacebook() {
    let fullRouteURL: any = 'https://pokerpundit.in/' + this.router.url
    this.shareonFacebook = 'www.facebook.com/sharer.php?u=' + fullRouteURL
    this.shareonTwitter = 'twitter.com/home/?status=' + fullRouteURL
    this.shareonWhatsapp = 'whatsapp://send?text=' + fullRouteURL
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
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    toastMixin.fire({
      animation: true,
      title: 'Link copied'
    });
  }


  featuredNews: any = [];
  relatedArticals: any = [];

  getAllNews() {

    this._NewsService.getAllWithoutAuthByType('NEWS').subscribe((response: any) => {
      if (response.success) {
        console.log("---------this.newsObj.category", this.newsObj.category)
        this.featuredNews = response.object.content.filter((newsItem: any) =>
          newsItem.category.some((category: string) => this.newsObj.category.includes(category))
        );
        console.log('this.featuredNews-------------', this.featuredNews)

        this.relatedArticals = this.featuredNews.filter((item: any) => item.id !== this.newsId);

        console.log("-------------------relatedArticals", this.relatedArticals)
        this.generateRandomObjects()
      }
    });
  }










  generateRandomObjects() {
    const randomIndices = this.generateRandomIndices(4);
    this.selectedObjects = randomIndices.map(index => this.relatedArticals[index]);
    console.log("selectedObjects----------------", this.selectedObjects)
  }

  private generateRandomIndices(count: number): number[] {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * this.relatedArticals.length);
      if (indices.indexOf(randomIndex) === -1) {
        indices.push(randomIndex);
      }

    }
    return indices;
  }

  htmlContent: string = '<figure class="media"><oembed url="https://www.youtube.com/embed/8OnpCA3bVFg?si=9RKaPm0RhS2irPJt"></oembed></figure>';

  getSafeHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.htmlContent);
  }


}
