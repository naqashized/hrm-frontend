import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { DesignationService } from '../../../services/designation.service';
import { Designation } from '../../../models/designation';

const name = new FormControl('', Validators.required);
const description = new FormControl('', Validators.required);


@Component({
  selector: 'app-add-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class AddDesignationComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private service: DesignationService) {}

  ngOnInit() {
    this.form = this.fb.group( {
      name: name,
      description: description

    } );
  }

  onSubmit(form) {
    var designation = new Designation(form.value.id, form.value.name, form.value.description)
    console.log("role "+JSON.stringify(designation))
    this.service.edit(designation).subscribe( response => {		
      console.log("response "+ JSON.stringify(response))
      this.router.navigate ( [ '/designation/list' ] );
  },
             //error => console.log(JSON.parse(error));
             error => error)

  }

}
