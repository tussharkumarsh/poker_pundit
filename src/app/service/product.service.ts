import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(
  { providedIn: 'root' }
)export class ProductService {

  private _httpHeaders:any;
  apiUrl: string = environment.apiUrl + "product"

  constructor(private http: HttpClient) {
    this._httpHeaders = {
      // headers: new HttpHeaders({
      //   'x-auth-token': JSON.parse(sessionStorage.getItem('cshareUser')|| '').authToken
      // })
    };
  }
  post(productData:any) {
    return this.http.post(this.apiUrl, productData, this._httpHeaders);
  }

  put(productData:any) {
    return this.http.put(this.apiUrl, productData, this._httpHeaders);
  }
  getById(id:any) {
    return this.http.get(this.apiUrl + '/getById/' + id, this._httpHeaders);
  }

  getByIds(ids:any) {
    return this.http.put(this.apiUrl + '/getByIds/', ids, this._httpHeaders);
  }


  getAll(size:any,page:any){
    return this.http.get(this.apiUrl + '?page='+ page + '&size=' + size + '&sort=createdAt,desc',this._httpHeaders);
  }

  getAllWithoutAuth(){
    return this.http.get(this.apiUrl + '?page=0&size=2000&sort=createdAt,desc');
  }

  getBystatus() {
    return this.http.get(this.apiUrl + '/getByStatus?status=ACTIVE&size=2000&page=0&sort=createdAt,desc');
  }

  getListByCreatedAtBetween(fromDate:any, toDate:any){
    return this.http.get(this.apiUrl + '/listByCreatedAtBetween?from='+ fromDate + '&to=' + toDate, this._httpHeaders);
  }

  getProductDetails(productIds:any){
    return this.http.get(this.apiUrl + '/getProductDetails?ids='+ productIds, this._httpHeaders);
  }


  createProduct(formData:any) {
    return this.http.post(this.apiUrl, formData, this._httpHeaders);
  }

  updateProduct(formData:any) {
    return this.http.put(this.apiUrl, formData, this._httpHeaders);
  }

  uploadImage(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.apiUrl + '/fileUpload?type=NEWS', formData, this._httpHeaders);
}

searchQuery(searchText:any) {
  return this.http.get(this.apiUrl + '/query?status=ACTIVE&query=' + searchText);
}
}
