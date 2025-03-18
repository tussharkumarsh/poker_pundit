import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from 'src/app/service/news.service';
import { Clipboard } from '@angular/cdk/clipboard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-onlinepokerroom',
  templateUrl: './onlinepokerroom.component.html',
  styleUrls: ['./onlinepokerroom.component.scss'],
})
export class OnlinePokerRoomComponent implements AfterViewInit {

  onlinePokerRooms: any = [];

  constructor(
    private elementRef: ElementRef,
    private _NewsService: NewsService,
    private _router: Router,
    private spinnerService: NgxSpinnerService,
    private clipboard: Clipboard) {}

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
    this.getAllOnlinePokerRooms()
  }

  getAllOnlinePokerRooms() {
    this._NewsService.getAllWithoutAuthByType('POKER_ROOM').subscribe((response: any) => {
      if (response.success) {
        this.onlinePokerRooms = response.object.content;
        console.log("-----this.onlinePokerRooms", this.onlinePokerRooms)
       }
    })
  }

  timerInterval:any 
  copyText(text: any) {

    this.clipboard.copy(text);
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
