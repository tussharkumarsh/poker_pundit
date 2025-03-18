import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokerChipsSet } from 'src/app/models/shared.model';
import { CartStorageService } from 'src/app/service/cart-storage.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  count!: number;
  pokerChipsSets!: PokerChipsSet[];

  productObj:any
  productId:any
  Object = Object;

  productCartArr: any = []

  constructor(
    private route: ActivatedRoute,
    private _ProductService: ProductService,
    private _router: Router,
    private localStorageService: CartStorageService,
    private location: Location
    ) {}

    @HostListener('window:scroll', ['$event'])
    onPageScroll(event: Event): void {
      // This method will be called when the window is scrolled
      // You can add your scroll-related logic here
      console.log('Page scrolled.');
    }

  ngOnInit(): void {

    if(this.localStorageService.getItem('myCart') != null){
      this.productCartArr = this.localStorageService.getItem('myCart');
      this.subTotalCalculation()
    }else{
      this.productCartArr = []
    }

    console.log("this.productCartArr",this.productCartArr)

    this.productId = this.route.snapshot.paramMap.get('productObj');
    console.log("this.productId",this.productId)
    this.getProduct(this.productId)

    this.stickey()
    this.count = 0;
    this.pokerChipsSets = [
      {
        id: 1,
        image: 'poker_chips1.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
      },
      {
        id: 2,
        image: 'poker_chips1.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
          isVisible: true,
      },
      {
        id: 3,
        image: 'poker_chips1.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
      },
      {
        id: 4,
        image: 'poker_chips1.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
      },
      {
        id: 5,
        image: 'poker_chips1.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
      },
    ];
  }

  stickey(){
    var startProductBarPos=-1;
    window.onscroll=function(){
      var bar = document.getElementById('Checkout') as HTMLImageElement;;
      var bar1 = document.getElementById('Checkout1') as HTMLImageElement;;
      if(startProductBarPos<0)
      
      startProductBarPos=findPosY(bar);

      if(pageYOffset>startProductBarPos && window.pageYOffset < 3200){
        bar.style.position='fixed';
        bar.style.top = '0';
        bar.style.right = '0';
        bar.style.padding = '0rem 3rem 0rem 15rem';
        bar.style.background = '#6A3791';
        bar.style.zIndex = '99';
        bar.style.width = '100%';
        bar.style.left = '0px';

        bar1.style.position='fixed';
        bar1.style.top = '0';
        bar1.style.right = '0';
        bar1.style.padding = '0rem 3rem 0rem 15rem';
        bar1.style.background = '#6A3791';
        bar1.style.zIndex = '99';
        bar1.style.width = '103%';
        bar1.style.left = '0px';

        
      }else{
        bar.style.position='relative';
        bar.style.padding = '0';
        bar.style.width = '114%';
        bar.style.left = '-25px';

        bar1.style.position='relative';
        bar1.style.padding = '0';
        bar1.style.width = '106%';
        bar1.style.left = '-45px';
      }
    };

    function findPosY(obj:any) {
      var curtop = 0;
      if (typeof (obj.offsetParent) != 'undefined' && obj.offsetParent) {
        while (obj.offsetParent) {
          curtop += obj.offsetTop;
          obj = obj.offsetParent;
        }
        curtop += obj.offsetTop;
      }
      else if (obj.y)
        curtop += obj.y;
      return curtop;
    }
  }

  getProduct(productObj:any) {
    this._ProductService.getById(productObj).subscribe((response:any) => {
      if (response.success) {
        console.log("response news obj",response)
        this.productObj = response.object
      }
    })
  }

  timerInterval:any 
  deleteCartItem(cartIndex:any){
    const indexToRemove = cartIndex; // Replace with the index of the object you want to remove
    if (indexToRemove >= 0 && indexToRemove < this.productCartArr.length) {
      this.productCartArr.splice(indexToRemove, 1);
    }
    this.localStorageService.setItem('myCart', this.productCartArr);

    this.subTotalCalculation()
    
    Swal.fire({
      imageUrl: './assets/img/success.png',
      imageWidth: 400,
      imageHeight: 200,          
      imageAlt: 'Custom image',
      timer: 5000,
      willClose: () => {
        clearInterval(this.timerInterval)
      }
    });
  }

  goToBuyNowPage(productObj:any){
    this.localStorageService.setItem('myCart', this.productCartArr);
    this._router.navigate(['/home/shop/cart/payment',productObj.id]);
  }


  subTotalAmount:any = 0

  subTotalCalculation(){
    var multiplicationResult
    this.subTotalAmount = 0
    for (const obj of this.productCartArr) {
      console.log("obj.selectedQuantity",obj.selectedQuantity)
      console.log("obj.selectedOptionItem",obj.selectedOptionItem)
      multiplicationResult = obj.selectedOptionItem * obj.selectedQuantity;
      console.log("multiplicationResult",multiplicationResult)
      this.subTotalAmount += multiplicationResult;
      console.log("this.subTotalAmount",this.subTotalAmount)
    }
    console.log("this.subTotalAmount",this.subTotalAmount)
    this.localStorageService.setItem('myCart', this.productCartArr);
  }


  increaseValue(id:any, selectedQty:any) {
    console.log("selectedQty:any",selectedQty+1)
    console.log("id",id)
    selectedQty+1
    for (const item of this.productCartArr) {
      if (item.id === id) {
        item.selectedQuantity = selectedQty;
        break; // Once we found the item, exit the loop
      }
    }
    
    
    // this.productCartArr = this.localStorageService.getItem('myCart');
    this.localStorageService.setItem('myCart', this.productCartArr);
    console.log("this.productCartArr",this.productCartArr)
  }

  decreaseValue(id:any, selectedQty:any) {
    console.log("selectedQty:any",selectedQty-1)
    console.log("id",id)

    selectedQty-1

    for (const item of this.productCartArr) {
      if (item.id === id) {
        item.selectedQuantity = selectedQty;
        break; // Once we found the item, exit the loop
      }
    }

    // this.productCartArr = this.localStorageService.getItem('myCart');
    this.localStorageService.setItem('myCart', this.productCartArr);
  }

  gotoBack(){
    this.location.back();
  }
}
