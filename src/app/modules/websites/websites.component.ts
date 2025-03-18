import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Websites } from 'src/app/models/shared.model';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss'],
})
export class WebsitesComponent implements OnInit {
  websitesData!: Websites[];

  websites: any = [];
  waitLoader:boolean = false

  constructor(
    private _NewsService: NewsService,
    private _router: Router,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.waitLoader = true

    setTimeout(() => {
    this.waitLoader = false
    this.spinnerService.hide();

    }, 2000);
    this.getAllWebsite()

    this.websitesData = [
      {
        id: 1,
        image: 'assets/img/website-img-1.png',
        title: 'Spartan Poker',
        description: 'Sign-up with "Pundit2" get $2 FREE (post KYC)',
        websiteLink: `https://www.spartanpoker.com/`,
      },
      {
        id: 2,
        image: 'assets/img/website-img-5.png',
        title: 'Khelo365',
        description: 'Sign-up & Get ₹100 FREE',
        websiteLink: `https://www.khelo365.com/`,
      },
      {
        id: 3,
        image: 'assets/img/website-img-5.png',
        title: 'MPL Poker',
        description: `Deposit ₹500 with code 'WIN5' and €1`,
        websiteLink: `https://www.mpl.live/poker`,
      },
      {
        id: 4,
        image: 'assets/img/website-img-4.png',
        title: 'India Plays',
        description: 'Win from ₹5.5 Crore in cash action',
        websiteLink: `https://www.indiaplays.com/`,
      },
      {
        id: 5,
        image: 'assets/img/website-img-2.png',
        title: 'Gamezy',
        description: `Deposit ₹1,000 with code 'GS1K' for 500% bonus + 3 tickets to Chip Up ₹100K`,
        websiteLink: `https://www.gamezy.com/`,
      },
      {
        id: 6,
        image: 'assets/img/website-img-4.png',
        title: 'PokerMatch India',
        description: 'Deposit ₹100 and get ₹600 cashback (₹200 instant)',
        websiteLink: `https://www.adda52.me/`,
      },
    ];
  }

  getAllWebsite() {
    this._NewsService.getAllWithoutAuthByType('WEBSITE').subscribe((response: any) => {
      if (response.success) {
        this.websites = response.object.content;
        console.log("this.websites", this.websites)
       }
    })
  }

  goToSinglePage(websiteObj:any){
    this._router.navigate(['/home/website/single',websiteObj.id]);
  }

  trackById(index: number, value: Websites) {
    return value.id;
  }
}
