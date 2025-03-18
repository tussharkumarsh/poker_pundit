import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Websites } from 'src/app/models/shared.model';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-single-toppromotions',
  templateUrl: './single-toppromotions.component.html',
  styleUrls: ['./single-toppromotions.component.scss'],
})
export class SingleToppromotionsComponent implements OnInit {
  websitesData!: Websites[];
  websiteId:any

  constructor(
    private route: ActivatedRoute,
    private _NewsService: NewsService,
    ) {}

  ngOnInit(): void {

    this.websiteId = this.route.snapshot.paramMap.get('toppromotionsObj');
    console.log("this.newsId",this.websiteId)

    this.getWebsite(this.websiteId)
  }

  websiteObj:any
  getWebsite(websiteObj:any) {
    this._NewsService.getById(websiteObj).subscribe((response:any) => {
      if (response.success) {
        console.log("response news obj",response)
        this.websiteObj = response.object
      }
    })
  }
}
