import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-ticker-advertisement',
  templateUrl: './ticker-advertisement.component.html',
  styleUrls: ['./ticker-advertisement.component.scss'],
})
export class TickerAdvertisementComponent implements AfterViewInit {

  promotions: any = [];

  constructor(
    private elementRef: ElementRef,
    private _NewsService: NewsService,
    private _router: Router,
    private spinnerService: NgxSpinnerService) {}

  ngAfterViewInit(): void {
    // const alertClose =
    //   this.elementRef.nativeElement.querySelector('.alert-close');
    // const message = this.elementRef.nativeElement.querySelector('.message');
    // alertClose.addEventListener('click', () => {
    //   message.style.display = 'none';
    //   message.remove();
    // });
  }
  ngOnInit(): void {
    this.getAllPromotions()
  }

  getAllPromotions() {
    this._NewsService.getAllWithoutAuthByType('PROMOTION').subscribe((response: any) => {
      if (response.success) {
        this.promotions = response.object.content;
        console.log("-----this.promotions", this.promotions)
       }
    })
  }
}
