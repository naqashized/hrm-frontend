import { Injectable } from '@angular/core';
import { Login }    from '../models/login';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';
// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  // private instance variable to hold base url
  private baseUrl = environment.baseUrl;
  //private baseUrl = 'http://localhost:3000/api/users/login';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  //headers.toekn = '';
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http:Http) { } 

  public login(login: Login):Observable<any>{
    //console.log('here '+User.title)
    return this.http
    .post(this.baseUrl+'/users/login',  login, this.options).map(this.extractData)
    .catch(this.handleErrorPromise);
  }

  logout(token):Observable<any>{
    // ...using get request
	 return this.http.post(this.baseUrl+'users/logout?access_token='+token, null, this.options)
	                // ...and calling .json() on the response to return data
	                 .map((res:Response) => res.json())
	                 //...errors if any
	                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  extractData(res: Response) {
    let body = res.json();
    console.log("res "+res+ "body "+body)
    return body || {};
  }
  handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  } 


}