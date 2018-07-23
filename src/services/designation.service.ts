import { Injectable } from '@angular/core';
import { Role }    from '../models/role';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';
// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';

@Injectable()
export class DesignationService {
  roles: Role[] = [];
  // private instance variable to hold base url
  private baseUrl = environment.baseUrl;
  //private baseUrl = 'http://localhost:3000/api/users?access_token=';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  //headers.toekn = '';
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http:Http) { } 

  getData(token){
    // ...using get request
	 return this.http.get(this.baseUrl+'designations?access_token='+token, this.options)
	                // ...and calling .json() on the response to return data
	                 .map((res:Response) => res.json())
	                 //...errors if any
	                 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  public add(role: Role){
    return this.http
    .post(this.baseUrl+'designations',  role, this.options).map(this.extractData)
    .catch(this.handleError);
  }

  public edit(role: Role){
    return this.http
    .put(this.baseUrl+'designations',  role, this.options).map(this.extractData)
    .catch(this.handleError);
  }

  public get(id: string, token: string){
    // ...using get request
    return this.http.get(this.baseUrl+'designations/'+id+'?access_token='+token, this.options)
    // ...and calling .json() on the response to return data
     .map((res:Response) => res.json())
     //...errors if any
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public delete(id){
    //console.log('here '+User.title)
    return this.http
    .delete(this.baseUrl+'designations/'+id, this.options)
    .map((res:Response) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("res "+body)
    return body || {};
}

private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}


}