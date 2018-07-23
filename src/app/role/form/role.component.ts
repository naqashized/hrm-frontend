import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../models/role';

const name = new FormControl('', Validators.required);
const description = new FormControl('', Validators.required);


@Component({
  selector: 'app-add-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class AddRoleComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private service: RoleService) {}

  ngOnInit() {
    this.form = this.fb.group( {
      name: name,
      description: description

    } );
  }

  onSubmit(form) {
    var role = new Role(form.value.id, form.value.name, form.value.description)
    console.log("role "+JSON.stringify(role))
    this.service.edit(role).subscribe( response => {		
      console.log("response "+ JSON.stringify(response))
      this.router.navigate ( [ '/role/list' ] );
  },
             //error => console.log(JSON.parse(error));
             error => error)

  }

}
