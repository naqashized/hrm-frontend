import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent {
  rows = [];

  temp = [];

  columns = [
    { prop: 'id' },
    {firstName: 'firstName'},
    {secondName: 'secondName'},
    {phone: 'phone'},
    {designationId: 'designationId'}
  ];

  constructor(private service: EmployeeService, private router: Router,@Inject(LOCAL_STORAGE) public local: WebStorageService) {
    //console.log('token '+this.local.get('token'))
    this.service.getData(this.local.get('token')).subscribe(
                       results => this.rows = results,
                        err => {
                            // Log errors if any
                            console.log(err);
                        }
    );
  }

  edit(event){
    //var id = event.attributes['designationId'].value;
    console.log(" id "+JSON.stringify(event))
    this.router.navigate ( [ '/employee/edit/'+event ] );
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
