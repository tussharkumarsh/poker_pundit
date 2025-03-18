import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(
  { providedIn: 'root' }
)export class OrderService {

  private _httpHeaders:any;
  apiUrl: string = environment.apiUrl + "order"

  constructor(private http: HttpClient) {
    this._httpHeaders = {
      headers: new HttpHeaders({
        'x-auth-token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MTI0ODVhZGFmOWJhODIyNDlhMzBjMjMiLCJleHAiOjE3MzM3NjUzNzYsImlhdCI6MTY4OTE4Mjk3Nn0.IbOepvYVfnKCT-KmfcJch0FuhTWTjTEeGNBqeiYclGxxNmwLtJQeZ8L18-vnLtoykaM6zMyddXcwN-hcMv8Wwg'
      })
    };
  }
  post(orderData:any) {
    return this.http.post(this.apiUrl, orderData, this._httpHeaders);
  }

  put(orderData:any) {
    return this.http.put(this.apiUrl, orderData, this._httpHeaders);
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

  getOrderDetails(orderIds:any){
    return this.http.get(this.apiUrl + '/getOrderDetails?ids='+ orderIds, this._httpHeaders);
  }


  createOrder(formData:any) {
    return this.http.post(this.apiUrl, formData, this._httpHeaders);
  }

  updateOrder(formData:any) {
    return this.http.put(this.apiUrl, formData, this._httpHeaders);
  }

  uploadImage(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.apiUrl + '/fileUpload?type=NEWS', formData, this._httpHeaders);
}
}
