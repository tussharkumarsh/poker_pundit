import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from 'src/app/service/news.service';
import { Clipboard } from '@angular/cdk/clipboard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-top-promotions',
  templateUrl: './toppromotions.component.html',
  styleUrls: ['./toppromotions.component.scss']
})
export class ToppromotionsComponent {

  topPromotions: any = [];

  constructor(
    private _NewsService: NewsService,
    private _router: Router,
    private spinnerService: NgxSpinnerService,
    private clipboard: Clipboard
  ) { }


  ngOnInit(): void {
    this.getAllTopPromotions()
  }

  getAllTopPromotions() {
    this._NewsService.getAllWithoutAuthByType('TOP_PROMOTION').subscribe((response: any) => {
      if (response.success) {
        this.topPromotions = response.object.content;
        console.log("-----this.topPromotions", this.topPromotions)
       }
    })
  }


  goToSinglePage(toppromotionsObj:any){
    this._router.navigate(['/home/toppromotions/single',toppromotionsObj.id]);
  }


  copyText(text: any) {
    this.showtoast()
    this.clipboard.copy(text);
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
