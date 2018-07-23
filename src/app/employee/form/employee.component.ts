import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee';
import {DesignationService} from '../../../services/designation.service';

const firstName = new FormControl('', Validators.required);
const secondName = new FormControl('', Validators.required);
const phone = new FormControl('', Validators.required);
const designationId = new FormControl('', Validators.required);
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  public form: FormGroup;
  public designations = [];
  constructor(private fb: FormBuilder, private router: Router, private service: EmployeeService, private designationService: DesignationService,@Inject(LOCAL_STORAGE) public local: WebStorageService) {}

  ngOnInit() {
    this.form = this.fb.group( {
      firstName: firstName,
      secondName: secondName,
      phone: phone,
      designationId: designationId

    } );
    this.designationService.getData(this.local.get('token')).subscribe(
      results => this.designations = results,
       err => {
           // Log errors if any
           console.log(err);
       }
      );
  }

  onSubmit(form) {
    var employee = new Employee(form.value.id, form.value.firstName, form.value.secondName, form.value.phone,form.value.designationId)
    console.log("role "+JSON.stringify(employee))
    this.service.add(employee).subscribe( response => {		
      console.log("response "+ JSON.stringify(response))
      this.router.navigate ( [ '/employee/list' ] );
  },
             //error => console.log(JSON.parse(error));
             error => error)

  }

}
