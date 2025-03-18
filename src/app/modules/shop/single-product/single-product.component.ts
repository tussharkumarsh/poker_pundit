import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokerChipsSet } from 'src/app/models/shared.model';
import { CartStorageService } from 'src/app/service/cart-storage.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  pokerChipsSets!: PokerChipsSet[];
  count!: number;

  thumbnailImages = [
    'assets/img/poker_chips.png',
    'assets/img/mic_chips.png',
    'assets/img/poker_chips.png',
  ];
  mainImage = 'assets/img/poker_chips.png';

  productId: any;
  Object = Object;

  selectedOptionItemIndex: any = undefined;
  selectedOptionItem: any = undefined;
  selectedQuantity: any = undefined;
  selectedItem: any = undefined;

  productCart: any = {};
  productCartArr: any = [];

  products: any = [];
  randomIndices: any[] = [];
  productObj: any;
  retrievedData: any;
  timerInterval: any;
  waitingLoader:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _ProductService: ProductService,
    private _router: Router,
    private localStorageService: CartStorageService,
    private clipboard: Clipboard,
  ) { }

  changeMainImage(image: string) {
    this.mainImage = image;
  }

  ngOnInit(): void {


    // setTimeout(() => {
    //   this.zoomOnHover()
    // }, 2000);
    
  

    this.waitingLoader = false
    this.stickey()
    setTimeout(() => {
      this.waitingLoader = true
    }, 1000);
    if (this.localStorageService.getItem('myCart') != null) {
      this.productCartArr = this.localStorageService.getItem('myCart');
    } else {
      this.productCartArr = [];
    }

    this.productId = this.route.snapshot.paramMap.get('productObj');
    // console.log('this.productId', this.productId);
    this.getProduct(this.productId);

    this.count = 1;
    this.getAllProducts()
  }

  increaseValue() {
    // console.log(this.count);
    this.count = this.count + 1;
  }

  decreaseValue() {
    if (this.count <= 0) {
      return;
    }
    this.count = this.count - 1;
  }

  defaultProduct:any = []

  getProduct(productObj: any) {
    this._ProductService.getById(productObj).subscribe((response: any) => {
      if (response.success) {
        // console.log('response news obj', response);
        this.productObj = response.object;
        this.mainImage = this.productObj.images;

        console.log("Object.keys(this.productObj.coloursAndPrices)",Object.keys(this.productObj.coloursAndPrices))

        this.defaultProduct = Object.keys(this.productObj.coloursAndPrices)

        console.log("---------product",this.defaultProduct[0])

      }
    });
  }

  goToBuyNowPage(productObj: any) {
    this.addToCart();
    if (this.productCartArr.length) {
      this._router.navigate(['/home/shop/cart/payment', productObj.id]);
    }
  }

  goToCartPage(productObj: any) {
    this._router.navigate(['/home/shop/cart', productObj.id]);
  }

  setData(): void {
    const data = { key: 'value' };
    this.localStorageService.setItem('myData', data);
  }

  getData() {
    this.retrievedData = this.localStorageService.getItem('myData');
  }

  removeData() {
    this.localStorageService.removeItem('myData');
  }

  goToSinglePage(productObj:any){
    this._router.navigate(['/home/shop/single',productObj.id]);
    setTimeout(() => {
      this.ngOnInit()
    }, 100);
  }

  
  showSelectedOptionItem: any
  showSelectedOptionDiscount: any
  showSelectedOptionItemName:any

  selectedOption(){


    this.showSelectedOptionItemName = Object.keys(this.productObj.coloursAndPrices)[this.selectedOptionItemIndex]
    this.selectedOptionItem = this.productObj.coloursAndPrices[this.showSelectedOptionItemName]

    console.log("selectedItem",this.showSelectedOptionItemName)
    console.log("selectedItemRate",this.selectedOptionItem)

    this.showSelectedOptionItem = this.selectedOptionItem.split(' ')[0]
    this.showSelectedOptionDiscount = this.selectedOptionItem.split(' ')[1]

    console.log("this.showSelectedOptionItem",this.showSelectedOptionItem)
    console.log("this.showSelectedOptionDiscount",this.showSelectedOptionDiscount)
  }

  addToCart() {
    this.selectedQuantity = this.count;
    if (
      this.selectedOptionItem == undefined ||
      this.selectedOptionItem == null
    ) {

      Swal.fire({
        imageUrl: './assets/img/error option.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        timer: 5000,
        willClose: () => {
          clearInterval(this.timerInterval)
        }
      });
      return;
    }

    if (this.selectedQuantity == null || this.selectedQuantity == 0) {
      Swal.fire({
        imageUrl: './assets/img/error quantity.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        timer: 5000,
        willClose: () => {
          clearInterval(this.timerInterval)
        }
      });
      return;
    }

    this.selectedOptionItem = this.selectedOptionItem.split(' ')[0]


    this.productCart = {
      createdAt: this.productObj.createdAt,
      version: this.productObj.version,
      lastModifiedAt: this.productObj.lastModifiedAt,
      id: this.productObj.id,
      systemId: this.productObj.systemId,
      productName: this.productObj.productName,
      category: this.productObj.category,
      subCategory: this.productObj.subCategory,
      description: this.productObj.description,
      detail: this.productObj.detail,
      pricing: this.productObj.pricing,
      ratings: this.productObj.ratings,
      coloursAndPrices: this.productObj.coloursAndPrices,
      images: this.productObj.images,
      previewImages: this.productObj.previewImages,
      status: this.productObj.status,
      selectedOptionItem: this.selectedOptionItem,
      selectedQuantity: this.selectedQuantity,
      selectedItem: this.showSelectedOptionItemName,
    };


    console.log("-----------this.productCart",this.productCart)
    console.log("-----------this.productCartArr",this.productCartArr)
    let chechCart = this.productCartArr.find(
      // (cartObj: any) => cartObj.id == this.productCart.id && cartObj.selectedOptionItem == this.productCart.selectedOptionItem
      (cartObj: any) => cartObj.id == Object.values(this.productCart.coloursAndPrices)
    );

    


    if (chechCart == null) {
      this.productCartArr.push(this.productCart);
      this.productCart = {};
      this.localStorageService.setItem('myCart', this.productCartArr);
      // Swal.fire('Success', 'Added to Cart', 'success');


      Swal.fire({
        imageUrl: './assets/img/cart success.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        timer: 5000,
        willClose: () => {
          clearInterval(this.timerInterval)
        }
      });

    } else {
      Swal.fire({
        imageUrl: './assets/img/cart fail.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        timer: 5000,
        willClose: () => {
          clearInterval(this.timerInterval)
        }
      });
    }
  }


  youMyaLimkProducts:any = []
  getAllProducts() {
    this._ProductService.getBystatus().subscribe((response: any) => {
      if (response.success) {
        this.products = response.object.content;
        this.products.slice(0, 12);
        this.products = this.products.filter((item: any) => item.id !== this.productId);
        console.log("products---------", this.products)
        this.youMyaLimkProducts = this.products
        this.shuffleArray(this.youMyaLimkProducts);
      }
    })
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  stickey(){
    var startProductBarPos=-1;
    window.onscroll=function(){
      var bar = document.getElementById('sticky-header') as HTMLImageElement;;
      if(startProductBarPos<0)
      
      startProductBarPos=findPosY(bar);

      if(pageYOffset>startProductBarPos && window.pageYOffset < 3200){
        bar.style.position='fixed';
        bar.style.top = '0';
        bar.style.right = '0';
        bar.style.padding = '2rem 3rem 1rem 1rem';
        bar.style.background = '#1f1f1f';
        bar.style.zIndex = '99';
        bar.style.width = '100%';
        
      }else{
        bar.style.position='relative';
        bar.style.padding = '0';

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
























  img:any = ''
  zoomOnHover(){
    this.img = document.getElementById("gfg-img") as HTMLImageElement;
    var preview = document.querySelector(".zoom-preview") as HTMLElement;

    var x = preview.offsetWidth / 100;
    var y = preview.offsetHeight / 100;

    this.img.addEventListener("mousemove", (e:any) => {
      preview.style.backgroundImage = `url(${this.img.src})`;
      preview.style.backgroundSize = this.img.width * x +
            "px " + this.img.height * y + "px";
        var posX = e.offsetX;
        var posY = e.offsetY;
        preview.style.backgroundPosition = "-" + posX * x +
            "px -" + posY * y + "px";
    });
    this.img.addEventListener("mouseout", () => {
        preview.style.backgroundImage = "none";
    });
  }


  showZoomImg:boolean= false

  over(){
    this.showZoomImg = true
    setTimeout(() => {
      this.zoomOnHover()
    }, 100);
  }

  out(){
    this.showZoomImg = false
  }
  

  copyRouteLink(){
    let fullRouteURL:any = 'https://pokerpundit.in/'+ this._router.url
    this.clipboard.copy(fullRouteURL);

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
    // this.showtoast()
  }

}
