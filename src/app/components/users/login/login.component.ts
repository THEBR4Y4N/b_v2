import { Component, OnInit } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth:AngularFireAuth,
    private router:Router,
    private authServivce:AuthService) { }

    public email:string='';
    public password:string='';

  ngOnInit() {
  }

  onLogin():void{
    this.authServivce.loginEmailUser(this.email,this.password)
    .then((res)=>{
      console.log('Bienvenido',res);
      this.onLoginRedirect();
    }).catch(err=>console.log('Error',err.message));
  }

  onLoginGoogle():void{
    this.authServivce.loginGoogleUser()
    .then((res)=>{
      console.log('Bienvenido',res);
      this.onLoginRedirect();
    }).catch(err=>console.log('Error',err.message));
  }

  onLoginFacebook():void{
    this.authServivce.loginFacebookUser()
    .then((res)=>{
      console.log('Bienvenido',res);
      this.onLoginRedirect();
    }).catch(err=>console.log('Error',err.message));
  }
  
  onLogout(){
    this.afAuth.auth.signOut();
  }

  onLoginRedirect():void{
    this.router.navigate(['home']);
  }

}
