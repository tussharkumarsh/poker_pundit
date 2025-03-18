import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PokerChipsSet, PokerChipsSetWithDiscount } from 'src/app/models/shared.model';
import { CartStorageService } from 'src/app/service/cart-storage.service';
import { CategoryService } from 'src/app/service/category.service';
import { NewsService } from 'src/app/service/news.service';
import { ProductService } from 'src/app/service/product.service';
declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  pokerChipsSets!: PokerChipsSetWithDiscount[];
  pokerChipsSets1!: PokerChipsSet[];
  @ViewChild('owlCarousel')
  owlCarouselRef!: ElementRef;
  owlCarousel: any;
  prevBtnDisabled: boolean = true;
  nextBtnDisabled: boolean = false;

  productTitle:any
  productTitleSort:any
  productTitle1:any
  productTitleSort1:any

  products: any = [];
  CategoryOneProducts: any = [];
  CategoryTwoProducts: any = [];
  productCartArr: any = []
  banner: any = [];

  constructor(
    private _ProductService: ProductService,
    private _router: Router,
    private localStorageService: CartStorageService,
    private _NewsService: NewsService,
    private _CategoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    
    if(this.localStorageService.getItem('myCart') != null){
      this.productCartArr = this.localStorageService.getItem('myCart');
    }else{
      this.productCartArr = []
    }
    this.getAllBanner();
    this.getAllProducts()
    this.stickey()
    this.getAllCategory()
    this.pokerChipsSets = [
      {
        id: 1,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
        discount: false,
        outOfStock: true
      },
      {
        id: 2,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
        discount: true,
        outOfStock: false
      },
      {
        id: 3,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
        discount: false,
        outOfStock: false
      },
      {
        id: 4,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
        discount: true,
        outOfStock: false
      },
      {
        id: 5,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
        discount: false,
        outOfStock: true
      },
      {
        id: 6,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 7,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 8,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 9,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 10,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 11,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 12,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 13,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 14,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 15,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 16,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
      {
        id: 17,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
        discount: false,
        outOfStock: false
      },
    ];

    this.pokerChipsSets1 = [
      {
        id: 1,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
      },
      {
        id: 2,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
      },
      {
        id: 3,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
      },
      {
        id: 4,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
      },
      {
        id: 5,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: true,
      },
      {
        id: 6,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
      },
      {
        id: 7,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
      },
      {
        id: 8,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
      },
      {
        id: 9,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
      },
      {
        id: 10,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
      },
      {
        id: 11,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
      },
      {
        id: 12,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
      },
      {
        id: 13,
        image: 'poker_chips.png',
        price: 2100.0,
        description:
          'Versace Design Poker Chips Set 300 And 500 Pieces, Plastic, 40 MM, 5g',
        isVisible: false,
      },
    ];

    $('.carousel1').owlCarousel({
      center: true,
      items: 3,
      loop: true,
      margin: 30,
      responsiveClass: true,
      dots: false,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
          loop: true,
        },
      },
    });

    $('.prev-btn1').click(function () {
      $('.carousel1').trigger('prev.owl.carousel');
    });

    $('.next-btn1').click(function () {
      $('.carousel1').trigger('next.owl.carousel');
    });
  }


  loadMore() {
    this.ngOnInit()
    this.productTitle = document.getElementById('product-title-1');
    this.productTitle.style.display = 'none';

    this.productTitleSort = document.getElementById('product-title-2');
    this.productTitleSort.style.display = 'flex';

    this.showCount = this.CategoryOneProducts.length

  }

  loadLess(){
    this.productTitle = document.getElementById('product-title-1');
    this.productTitle.style.display = 'flex';

    this.productTitleSort = document.getElementById('product-title-2');
    this.productTitleSort.style.display = 'none';
    this.showCount = 5
    this.ngOnInit()
  }

  loadLess2(){
    this.productTitle = document.getElementById('product-title-3');
    this.productTitle.style.display = 'flex';

    this.productTitleSort = document.getElementById('product-title-4');
    this.productTitleSort.style.display = 'none';

    this.showCount1 = 5

  }

  loadMore1() {
    this.ngOnInit()
    this.productTitle1 = document.getElementById('product-title-3');
    this.productTitle1.style.display = 'none';

    this.productTitleSort1 = document.getElementById('product-title-4');
    this.productTitleSort1.style.display = 'flex';

    this.showCount1 = this.CategoryTwoProducts.length
  }


  stickey(){
    var startProductBarPos=-1;
    window.onscroll=function(){
      var bar = document.getElementById('pills-tab') as HTMLImageElement;;
      var bar1 = document.getElementById('pills-tab11') as HTMLImageElement;;
      if(startProductBarPos<0)
      
      startProductBarPos=findPosY(bar);
      startProductBarPos=findPosY(bar1);

      if(pageYOffset>startProductBarPos && window.pageYOffset < 3200){
        bar.style.position='fixed';
        bar.style.top = '0';
        bar.style.right = '0';
        bar.style.padding = '1rem 2rem 1rem 14.7rem';
        bar.style.background = '#1f1f1f';
        bar.style.zIndex = '99';


        bar1.style.position='fixed';
        bar1.style.top = '0';
        bar1.style.right = '0';
        bar1.style.padding = '3rem 3rem 1rem 2.7rem';
        bar1.style.background = '#1f1f1f';
        bar1.style.zIndex = '99';
        
      }else{
        bar.style.position='relative';
        bar.style.padding = '0';

        bar1.style.position='relative';
        bar1.style.padding = '0';
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

  showCount: number = 5
  showCount1: number = 5


  allProductWithFiltered: any = [];

  productTable: any = [];
  productChairs: any = [];
  productPokerChipsSet: any = [];
  productDesks: any = [];
  productGamingStation: any = [];
  

  getAllProducts() {
    this._ProductService.getBystatus().subscribe((response: any) => {
      if (response.success) {
        this.products = response.object.content;

        this.productTable = this.products.filter((productItem: any) => productItem.category == 'Tables');
        this.productChairs = this.products.filter((productItem: any) => productItem.category == 'Chairs');
        this.productPokerChipsSet = this.products.filter((productItem: any) => productItem.category == 'Poker Chips Set');
        this.productDesks = this.products.filter((productItem: any) => productItem.category == 'Desks');
        this.productGamingStation = this.products.filter((productItem: any) => productItem.category == 'Gaming Station');

        this.CategoryOneProducts = this.products.filter((productItem: any) => productItem.subCategory == 'category-1');
        this.CategoryTwoProducts = this.products.filter((productItem: any) => productItem.subCategory == 'category-2');
        
      }
    })
  }


  selectedMenuName: string = 'Home'
  getAllProductsWithFilter(productName:any) {

    this.selectedMenuName = productName
    this._ProductService.getBystatus().subscribe((response: any) => {
      if (response.success) {
        this.products = response.object.content;
        console.log("on filter products---------", this.products)

        this.allProductWithFiltered = this.products.filter((productItem: any) => productItem.category == 'Product '+productName);

      }
    })
  }


  myFunction() {
    var x = (document.getElementById("myLinks") as HTMLElement);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  goToSinglePage(productObj:any){
    this._router.navigate(['/home/shop/single',productObj.id]);
  }

  goToCartPage(productObj:any){
    this._router.navigate(['/home/shop/cart','64c133484edf7555563922f2']);
  }

  getAllBanner() {
    this._NewsService
      .getAllWithoutAuthByType('BANNER')
      .subscribe((response: any) => {
        if (response.success) {
          this.banner = response.object.content;
          console.log('-----this.banner', this.banner);
        }
      });
  }

  categoriesList:any = []
  homeCategoriesList:any = []
  homeCategoriesListWithoutName:any = []
  modifiedData:any = {}
  getAllCategory() {
    this._CategoryService.getAll().subscribe((response: any) => {
      if (response) {
        this.categoriesList = response;
        this.homeCategoriesList = response.filter((item:any) => item.name.startsWith('Category'));
        this.categoriesList = this.categoriesList.filter((item:any) => item.name.startsWith('Product'));
        console.log("categoriesList--------",this.categoriesList)
        console.log("this.homeCategoriesList",this.homeCategoriesList)


        this.modifiedData = this.categoriesList.map((item:any) => {
          item.name = item.name.replace("Product ", ""); // Remove "Product " from the name
          return item;
        });

        this.homeCategoriesListWithoutName = this.homeCategoriesList.map((item:any) => {
          item.name = item.name.replace("Category ", ""); // Remove "Product " from the name
          return item;
        });

        console.log("modifiedData-----",this.modifiedData)
        console.log("homeCategoriesListWithoutName-----",this.homeCategoriesListWithoutName)


      }
    })
  }
}
