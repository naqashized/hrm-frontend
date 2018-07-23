import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Inject, Injectable } from '@angular/core';

const name = new FormControl('', Validators.required);
const description = new FormControl('', Validators.required);
const id = new FormControl('', Validators.required);

@Component({
  selector: 'app-add-role',
  templateUrl: './edit.role.component.html',
  styleUrls: ['./role.component.scss']
})
export class EditRoleComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private routeParam: ActivatedRoute, private service: RoleService, @Inject(LOCAL_STORAGE) public local: WebStorageService) {}

  ngOnInit() {
    this.form = this.fb.group( {
        name: name,
        description: description,
        id: id
      } );
    this.service.get(this.routeParam.snapshot.params.id,this.local.get('token')).subscribe(
        results => this.form.setValue({
            id: results.id,
            name: results.name,
            description: results.description
        }),
         err => {
             // Log errors if any
             console.log(err);
         });

  }

  onSubmit(form) {
    var role = new Role(form.value.id,form.value.name, form.value.description)
    console.log("role "+JSON.stringify(role))
    this.service.edit(role).subscribe( response => {		
      console.log("response "+ JSON.stringify(response))
      this.router.navigate ( [ '/role/list' ] );
  },
             //error => console.log(JSON.parse(error));
             error => error)

  }

}
