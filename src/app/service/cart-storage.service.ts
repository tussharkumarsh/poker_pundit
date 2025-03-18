import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartStorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public cartlist = [];

  deleteItemfromCartList(cartId: any) {
    // Step 2: Modify the Array (example using splice())
  }



  setItemSession(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getItemSession(key: string): any {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItemSession(key: string): void {
    sessionStorage.removeItem(key);
  }

}
