import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Login } from '../../../models/login';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  private service: LoginService;
  public form: FormGroup;
  private key = 'token';
  private value: any;
  constructor(private fb: FormBuilder, private router: Router,    private loginService: LoginService, @Inject(LOCAL_STORAGE) public local: WebStorageService) 
 {
   this.service = loginService;
 }

  ngOnInit() {
    this.form = this.fb.group ( {
      email: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit(object) {
    console.log(JSON.stringify(object.value))
    var login = new Login (object.value.email, object.value.password);
  this.service.login(login).subscribe( response => {		
    console.log("response "+ JSON.stringify(response))
    console.log("seetiing toke "+response.id)
    this.local.set(this.key, response.id)
    console.log("getting toke "+this.local.get(this.key))
    this.router.navigate ( [ '/' ] );
},
           error => console.log(error));

    // console.log("response "+JSON.stringify(response))
    // var token = response.id;

  }

}
