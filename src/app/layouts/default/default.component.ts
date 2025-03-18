import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from 'src/app/service/news.service';
declare var $: any;

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  sidebarExpanded = false;
  banner: any = [];

  constructor(
    private _NewsService: NewsService,
    private _router: Router
  ) // private spinnerService: NgxSpinnerService
  {}

  ngOnInit() {
    this.getAllBanner();
    $(window).on('load', function () {
      $('#myModal').modal('show');
    });
    $('#close').click(function () {
      $('#myModal').modal('hide');
    });
  }

  getAllBanner() {
    this._NewsService
      .getAllWithoutAuthByType('BANNER')
      .subscribe((response: any) => {
        if (response.success) {
          this.banner = response.object.content;
          console.log('-----this.banner', this.banner);
        }
      });
  }
}
