import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent {
  rows = [];

  temp = [];

  columns = [
    { prop: 'name' },
    { name: 'email' },
    { name: 'username' }
  ];

  constructor(private userService: UserService, @Inject(LOCAL_STORAGE) public local: WebStorageService) {
    console.log('token '+this.local.get('token'))
    this.userService.getData(this.local.get('token')).subscribe(
                       results => this.rows = results,
                        err => {
                            // Log errors if any
                            console.log(err);
                        });
  }

  fetch(cb) {
   const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };



    req.send();
  }

  updateFilter(event) {
    const val = event.target.value;
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }
}
