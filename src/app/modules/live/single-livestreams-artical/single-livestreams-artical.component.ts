import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
import { Clipboard } from '@angular/cdk/clipboard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-single-livestreams-artical',
  templateUrl: './single-livestreams-artical.component.html',
  styleUrls: ['./single-livestreams-artical.component.scss']
})
export class SingleLivestreamsArticalComponent {

  videoId:any

  loadWait:boolean = false

  shareonFacebook:any = ''
  shareonTwitter:any = ''
  shareonWhatsapp:any = ''
  pageHeightOfWindow:any


  constructor(
    private route: ActivatedRoute,
    private _NewsService: NewsService,
    private router: Router,
    private clipboard: Clipboard
    ) {}

  ngOnInit(): void {
    this.loadWait = true
    setTimeout(() => {
      this.loadWait = false
    }, 2000);

    this.stickey()

    this.videoId = this.route.snapshot.paramMap.get('videoObj');
    console.log("this.video",this.videoId)
    this.getVideos(this.videoId)

  }


  stickey() {
    let pageHeightOfWindow = this.pageHeightOfWindow + 100
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

  videoObj:any
  getVideos(videoObj:any) {
    this._NewsService.getById(videoObj).subscribe((response:any) => {
      if (response.success) {
        console.log("response video obj",response)
        this.videoObj = response.object
      }
    })
  }

  copyRouteLink(){
    let fullRouteURL:any = 'https://pokerpundit.in/'+ this.router.url
    this.clipboard.copy(fullRouteURL);
    this.showtoast()
  }


  copyRouteLinkFacebook(){
    let fullRouteURL:any = 'https://pokerpundit.in/'+ this.router.url
    this.shareonFacebook = 'www.facebook.com/sharer.php?u=' + fullRouteURL
    this.shareonTwitter = 'twitter.com/home/?status=' + fullRouteURL
    this.shareonWhatsapp = 'whatsapp://send?text=' + fullRouteURL
  }

  showtoast(){
    var toastMixin:any = Swal.mixin({
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
}
