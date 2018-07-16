import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

const password = new FormControl('', Validators.required);
const email = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.form = this.fb.group( {
      username: [null , Validators.compose ( [ Validators.required ] )],
      email: email,
      password: password,
      confirmPassword: confirmPassword
    } );
  }

  onSubmit(form) {
    console.log("user "+form.value.username+"user "+form.value.email)
    var user = new User(form.value.username, form.value.email, form.value.password)
    console.log("user "+JSON.stringify(user))
    this.userService.addUser(user).subscribe( response => {		
      //console.log("response "+ JSON.stringify(response))
      this.router.navigate ( [ '/authentication/signin' ] );
  },
             //error => console.log(JSON.parse(error));
             error => error)

  }

}
