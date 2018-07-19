import { Component, EventEmitter, Output, Input } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Login } from '../../../models/login';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() heading: string;
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() openSearch = new EventEmitter<void>();
  @Output() toggleFullscreen = new EventEmitter<void>();
  private service: LoginService;
  constructor( private router: Router,    private loginService: LoginService, @Inject(LOCAL_STORAGE) public local: WebStorageService) 
  {
    this.service = loginService;
  }

  logout(){
      this.service.logout(this.local.get('token')).subscribe( response => {		
        console.log("response "+ JSON.stringify(response))
        this.local.set('token',null)
        this.router.navigate ( [ '/authentication/signin' ] );
        },
        error => { this.local.set('token',null)
                    this.router.navigate ( [ '/authentication/signin' ] );
                }
      );        
  }
}
