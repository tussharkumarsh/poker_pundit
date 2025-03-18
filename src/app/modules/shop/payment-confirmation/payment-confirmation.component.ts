import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartStorageService } from 'src/app/service/cart-storage.service';
import { ProductService } from 'src/app/service/product.service';
declare let Razorpay: any;
import { Location } from '@angular/common';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent {

  response:any;
  razorpayResponse:any;
  showModal = false;

  productCartArr: any = []
  productCartCustomer: any = {}
  discountAmount:any = 0

  isChecked: boolean = true;
  showCartItems:boolean= false

  constructor(
    private route: ActivatedRoute,
    private _ProductService: ProductService,
    private _router: Router,
    private cd:  ChangeDetectorRef,
    private localStorageService: CartStorageService,
    private location: Location
  ) { }


  ngOnInit(): void {

    if(this.localStorageService.getItem('myCart') != null){
      this.productCartArr = this.localStorageService.getItem('myCart');
      this.subTotalCalculation()
    }else{
      this.productCartArr = []
    }

    if(this.localStorageService.getItem('myCartCustomer') != null){
      this.productCartCustomer = this.localStorageService.getItem('myCartCustomer');
    }else{
      this.productCartCustomer = {}
    }

    if(this.localStorageService.getItemSession('discountApplied') != null){
      this.discountAmount = this.localStorageService.getItemSession('discountApplied');
    }else{
      this.discountAmount = 0
    }

    console.log("this.productCartArr",this.productCartArr)
    console.log("this.productCartCustomer",this.productCartCustomer)
  }


  RAZORPAY_OPTIONS:any = {
    "key": "rzp_test_BJaafROHEXEZus",
    "amount": "",
    "name": "Poker Pundit",
    "order_id": "",
    "description": "Load Wallet",
    "image": "https://pokerpandit.s3.ap-south-1.amazonaws.com/news/1691501695774/PP-shark-2.png",
    "prefill": {
      "name": this.productCartCustomer.firstName,
      "email": this.productCartCustomer.emailId,
      "contact": this.productCartCustomer.contactNo,
      "method": ""
    },
    "modal": {},
    "theme": {
      "color": "#6a3791"
    }
  };

  public proceed() {
    this.RAZORPAY_OPTIONS.amount = (this.subTotalAmount + Math.round(this.subTotalAmount * 18 / 100)) - this.discountAmount + '00';

    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    // this.showPopup();

    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response:any) {
    console.log("payment success ",response);
    this._router.navigate(["/home/shop/success"]);
    localStorage.clear()
    this.razorpayResponse = `Razorpay Response`;
    this.showModal = true;
    this.cd.detectChanges();
    (document.getElementById('razorpay-response') as HTMLElement).style.display = 'block';
  }

  public test() {
    (document.getElementById('response-modal') as HTMLElement).style.display = 'block';
    this.response = `dummy text`;
  }



  subTotalAmount:any = 0
  subTotalCalculation(){
    var multiplicationResult
    for (const obj of this.productCartArr) {
      multiplicationResult = obj.selectedOptionItem * obj.selectedQuantity;
      this.subTotalAmount += multiplicationResult;
    }
    console.log("this.subTotalAmount",this.subTotalAmount)
    this.localStorageService.setItem('myCart', this.productCartArr);
  }

  gotoBack(){
    this.location.back();
  }
}
