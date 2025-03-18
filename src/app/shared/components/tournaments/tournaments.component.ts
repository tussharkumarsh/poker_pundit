import { Component, Input, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss'],
})
export class TournamentsComponent implements OnInit {
  @Input() imageSrc: string = '/assets/img/default-image.png'; // Add a default value

  ngOnInit(): void {
    // First carousel
    // $('').owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   responsive: {
    //     0: {
    //       items: 1,
    //     },
    //     600: {
    //       items: 1,
    //     },
    //     1000: {
    //       items: 1,
    //     },
    //   },
    // });
  }
}
