import { Component } from '@angular/core';
import { RoleService } from '../../../services/role.service';
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
    { prop: 'description' },
    { name: 'name' },
    {description: 'description'}
  ];

  constructor(private service: RoleService, @Inject(LOCAL_STORAGE) public local: WebStorageService) {
    console.log('token '+this.local.get('token'))
    this.service.getData(this.local.get('token')).subscribe(
                       results => this.rows = results,
                        err => {
                            // Log errors if any
                            console.log(err);
                        });
  }

  delete(id){
    //console.log("id "+id)
    this.service.delete(id).subscribe(
      results => { //console.log("response "+ JSON.stringify(results));
      //this.router.navigate ( [ '/designation/list' ] )
      this.service.getData(this.local.get('token')).subscribe(
        results => this.rows = results,
         err => {
             // Log errors if any
             console.log(err);
         }
      );
    
    
    
    },
      err => {
        // Log errors if any
        console.log(err);
      }
    );
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
