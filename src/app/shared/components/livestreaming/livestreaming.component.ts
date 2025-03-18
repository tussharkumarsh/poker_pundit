import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-livestreaming',
  templateUrl: './livestreaming.component.html',
  styleUrls: ['./livestreaming.component.scss'],
})
export class LivestreamingComponent implements OnInit {
  @ViewChild('owlCarousel')
  owlCarouselRef!: ElementRef;
  owlCarousel: any;
  prevBtnDisabled: boolean = true;
  nextBtnDisabled: boolean = false;
  ngOnInit(): void {
    $('carousel5').owlCarousel({
      stagePadding: 200,
      loop: true,
      margin: 10,
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
          stagePadding: 300,
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
  }
}
