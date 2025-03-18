import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

export interface contactUs {
  name: string
  email: string;
  message: string;
}
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {


  contactUs: contactUs = {
    name: '',
    email: '',
    message: '',
  };

  timerInterval:any 
  handleSubmit(form: NgForm) {
    console.log(form.valid);
    if (form.valid) {
      console.log(form.value);
      form.reset();
      // Swal.fire(
      //   'Success!',
      //   'You have succesfully submitted details, you will get connect from our side',
      //   'success'
      // );

      Swal.fire({
        imageUrl: './assets/img/contact.png',
        imageWidth: 400,
        imageHeight: 200,          
        imageAlt: 'Custom image',
        timer: 5000,
        willClose: () => {
          clearInterval(this.timerInterval)
        }
      });

    } else {
      form.form.markAllAsTouched();
      Swal.fire('Error!', `Error`, 'error');
    }
  }

}
