import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsService } from 'src/app/service/news.service';
import Swal from 'sweetalert2';
// import swal from 'sweetalert2';

export interface NewsLetter {
  email: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  sliders: any = [];
  newsLetter: NewsLetter = {
    email: '',
  };

  websites: any = [];

  constructor(
    private _NewsService: NewsService
  ) {}

  ngOnInit(): void {
    this.getAllWebsite()
  }
  


  getAllWebsite() {
    this._NewsService.getAllWithoutAuthByType('WEBSITE').subscribe((response: any) => {
        if (response.success) {
          this.websites = response.object.content;
          console.log('-----this.websites', this.websites);
        }
      });
  }

  handleSubmit(form: NgForm) {
    console.log(form.valid);
    if (form.valid) {
      console.log(form.value);
      form.reset();
      Swal.fire(
        'Success!',
        'You have succesfully subscribed for our newsletter, you will get weekly mailers from our side',
        'success'
      );
    } else {
      form.form.markAllAsTouched();
      Swal.fire('Error!', `Error`, 'error');
    }
  }
}
