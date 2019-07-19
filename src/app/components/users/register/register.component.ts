import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router';
import{AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,
    private authService:AuthService,
    public afAuth:AngularFireAuth) { }
    public email:string='';
    public password:string='';
  ngOnInit() {
  }

  onAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then((res)=>{
      this.router.navigate(['']);
    }).catch(err=>console.log('err',err.message));
  }

  onLoginGoogle():void{
    this.authService.loginGoogleUser()
    .then((res)=>{
      console.log('Loged',res);
      this.onLoginRedirect();
    }).catch(err=>console.log('Error',err.message));
  }

  onLoginFacebook():void{
    this.authService.loginFacebookUser()
    .then((res)=>{
      console.log('Loged',res);
      this.onLoginRedirect();
    }).catch(err=>console.log('Error',err.message));
  }
  
  onLogout(){
    this.afAuth.auth.signOut();
  }

  onLoginRedirect():void{
    this.router.navigate(['admin/list-books']);
  }
}
