import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartStorageService } from 'src/app/service/cart-storage.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-payment',
  templateUrl: './product-payment.component.html',
  styleUrls: ['./product-payment.component.scss']
})
export class ProductPaymentComponent {


  productObj:any
  productId:any
  Object = Object;

  productCartArr: any = []


  countryCodejson:any  = []
  statejson:any  = []

  customerDateObj:any = []

  customerData:any = {}

  timerInterval: any;

  
  constructor(
    private route: ActivatedRoute,
    private _ProductService: ProductService,
    private _OrderService: OrderService,
    private localStorageService: CartStorageService,
    private _router: Router,
    private http: HttpClient,
    private location: Location
    ) {}


  ngOnInit(): void {

    this.localStorageService.removeItemSession('discountApplied');

    console.log("sessionStorage.getItem('cartCustomerData')",JSON.parse(sessionStorage.getItem('cartCustomerData') || '{}') )

    if(sessionStorage.getItem('cartCustomerData') != null){
      this.customerDateObj = JSON.parse(sessionStorage.getItem('cartCustomerData') || '{}');
    }


    this.http.get('./assets/data/isd-code.json').subscribe((data:any) => {
      this.countryCodejson = data;
      this.countryCodejson = this.countryCodejson.filter((newsItem: any) => newsItem.dial_code == '+91'); //remove filter if you want to all list
    });

    this.http.get('./assets/data/states-and-districts.json').subscribe((data:any) => {
      this.statejson = data.states;
      console.log("this.statejson",this.statejson)
    });


    if(this.localStorageService.getItem('myCart') != null){
      this.productCartArr = this.localStorageService.getItem('myCart');
      this.subTotalCalculation()
    }else{
      this.productCartArr = []
    }

    this.productId = this.route.snapshot.paramMap.get('productObj');
    console.log("this.productId",this.productId)
    this.getProduct(this.productId)
  }

  getProduct(productObj:any) {
    this._ProductService.getById(productObj).subscribe((response:any) => {
      if (response.success) {
        console.log("response news obj",response)
        this.productObj = response.object
      }
    })
  }

  gotoBack(){
    this.location.back();
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

  discountCode:any =  ''
  discountAmount:any = 0

  applyDiscountCode(){
    if(this.discountCode == 'FREE'){
      this.discountAmount = 500

      Swal.fire(
        'Success',
        'You rewarded with ₹ 500/- discount',
        'success'
      )
      this.localStorageService.setItemSession('discountApplied', this.discountAmount);
    }else{
      this.discountAmount = 0
      Swal.fire(
        'Error',
        'This code not valid',
        'error'
      )
      this.localStorageService.setItemSession('discountApplied', this.discountAmount);
    }
  }



  proceedToPay(){
    console.log("this.customerDateObj",this.customerDateObj)
    console.log("this.customerDateObj.firstName",this.customerDateObj.firstName)
    if(
      this.customerDateObj.firstName != undefined && 
      this.customerDateObj.lastName != undefined && 
      this.customerDateObj.contactNo != undefined && 
      this.customerDateObj.emailId != undefined &&
      this.customerDateObj.shippingFirstName != undefined &&
      this.customerDateObj.shippingLastName != undefined &&
      this.customerDateObj.address != undefined &&
      this.customerDateObj.pincode != undefined &&
      this.customerDateObj.city != undefined &&
      this.customerDateObj.state != undefined &&
      this.customerDateObj.country != undefined
      ){
      this.customerData = 
        {
          'firstName': this.customerDateObj.firstName,
          'lastName': this.customerDateObj.lastName,
          'contactNo': this.customerDateObj.contactNo,
          'emailId': this.customerDateObj.emailId,
          'shippingFirstName': this.customerDateObj.shippingFirstName,
          'shippingLastName': this.customerDateObj.shippingLastName,
          'address':this.customerDateObj.address,
          'pincode': this.customerDateObj.pincode,
          'city': this.customerDateObj.city,
          'state': this.customerDateObj.state,
          'country': this.customerDateObj.country,
      }
      this.localStorageService.setItem('myCartCustomer', this.customerData); 

      
      sessionStorage.setItem('cartCustomerData', JSON.stringify(this.customerData))


      this.createOrder() 
      this._router.navigate(['/home/shop/confirmation']);
    }else{

      Swal.fire({
        imageUrl: './assets/img/errorpopup2.png',
        imageWidth: 400,
        imageHeight: 150,
        imageAlt: 'Custom image',
        timer: 5000,
        willClose: () => {
          clearInterval(this.timerInterval)
        }
      });

    }



    // routerLink="/home/shop/confirmation"
  }


  errorResponse: any;

  createOrder() {

    this.customerData = {
        "firstName": this.customerDateObj.firstName,
        "latsName": this.customerDateObj.lastName,
        "contact": this.customerDateObj.contactNo,
        "email": this.customerDateObj.emailId,
        "shippingAddress": "Okhla Delhi",
        "address": this.customerDateObj.address,
        "city": this.customerDateObj.city,
        "state": this.customerDateObj.state,
        "country": this.customerDateObj.country,
        "pincode": this.customerDateObj.pincode,
        "productName": "Versace Design Poker Chips Set - 300 & 500 Pieces",
        "totalAmount": "2500",
        "status":"ACTIVE"
    }

    console.log("productsIdToBeEdited", this.customerData)

    this._OrderService.post(this.customerData).subscribe((response: any) => {
      if (response.success) {
        // Swal.fire(
        //   'Success',
        //   response.message,
        //   'success'
        // )
        this.ngOnInit()
      } else {
        Swal.fire(
          'Error',
          response.message,
          'error'
        )
      }
    }, error => {
      this.errorResponse = error
      Swal.fire(
        'Error',
        'Error',
        'error'
      )
    })
  }

}
