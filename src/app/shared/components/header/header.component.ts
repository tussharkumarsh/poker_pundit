import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  searchToggle: boolean = false
  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2, 
    private _NewsService: NewsService,
    private _ProductService: ProductService,
    private _router: Router) {}

  ngOnInit() {
    const navbarMenu = this.elementRef.nativeElement.querySelector('#menu');
    const burgerMenu = this.elementRef.nativeElement.querySelector('#burger');
    const bgOverlay = this.elementRef.nativeElement.querySelector('.overlay');

    if (burgerMenu && bgOverlay) {
      this.renderer.listen(burgerMenu, 'click', () => {
        this.renderer.addClass(navbarMenu, 'is-active');
        this.renderer.addClass(bgOverlay, 'is-active');
      });

      this.renderer.listen(bgOverlay, 'click', () => {
        this.renderer.removeClass(navbarMenu, 'is-active');
        this.renderer.removeClass(bgOverlay, 'is-active');
      });
    }

    const menuLinks =
      this.elementRef.nativeElement.querySelectorAll('.menu-link');

    menuLinks.forEach((link: any) => {
      this.renderer.listen(link, 'click', () => {
        this.renderer.removeClass(navbarMenu, 'is-active');
        this.renderer.removeClass(bgOverlay, 'is-active');
      });
    });

    const searchBlock =
      this.elementRef.nativeElement.querySelector('.search-block');
    const searchToggle =
      this.elementRef.nativeElement.querySelector('.search-toggle');
    const searchCancel =
      this.elementRef.nativeElement.querySelector('.search-cancel');

    if (searchToggle && searchCancel) {
      this.renderer.listen(searchToggle, 'click', () => {
        this.renderer.addClass(searchBlock, 'is-active');
      });

      this.renderer.listen(searchCancel, 'click', () => {
        this.renderer.removeClass(searchBlock, 'is-active');
      });
    }
  }

  showSearch(){
    this.searchToggle = true
  }

  searchQuery:any = ''
  searchResult:any = [];
  searchResultProduct:any = [];
  allsearchResult:any = [];

  search(){
    // console.log("searchQuery",this.searchQuery)
      this._NewsService.searchQuery(this.searchQuery).subscribe((response: any) => {
        if (response.success) {
          this.searchResult = response.object.content;
          this.searchResult = this.searchResult.filter((newsItem: any) =>
            newsItem.type.includes('NEWS') || newsItem.type.includes('WEBSITE') || newsItem.type.includes('VIDEOS')
          );
          // console.log("searchResult----", this.searchResult)
        }
      })

      this._ProductService.searchQuery(this.searchQuery).subscribe((response: any) => {
        if (response.success) {
          this.searchResultProduct = response.object.content;
          // console.log("product search----", this.searchResultProduct)
        }
      })

      if(this.searchResult.length || this.searchResultProduct.length){
        this.allsearchResult = this.searchResult.concat(this.searchResultProduct);
        // console.log("this.allsearchResult",this.allsearchResult)
      }


  }


  gotoPage(searchObj: any){
    console.log("searchObj",searchObj)
    if(searchObj.type == 'NEWS'){
      this.goToNewsSinglePage(searchObj)    
    }

    if(searchObj.type == 'VIDEOS'){
      this.goToVideosSinglePage(searchObj)    
    }

    if(searchObj.type == 'WEBSITE'){
      this.goToWebsiteSinglePage(searchObj)    
    }

    if(searchObj.productName){
      this.goToProductSinglePage(searchObj)    
    }

    this.searchQuery = ''
  }

  goToNewsSinglePage(newsObj: any) {
    this._router.navigate(['/home/news/single', newsObj.id]);
  }

  goToVideosSinglePage(videoObj: any) {
    this._router.navigate(['/home/live/single', videoObj.id]);
  }

  goToWebsiteSinglePage(websiteObj:any){
    this._router.navigate(['/home/website/single', websiteObj.id]);
  }

  goToProductSinglePage(productObj:any){
    this._router.navigate(['/home/shop/single',productObj.id]);
  }


  myFunction(){
    // alert("ss")
    setTimeout(() => {
      this.searchQuery = ''
    }, 100);
  }
}
