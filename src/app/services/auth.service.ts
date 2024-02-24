import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IUser } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userApi = " https://api.escuelajs.co/api/v1/auth/login"

  private currentUser$ = new BehaviorSubject<IUser | null>(null);
  
  private key = 'ckey'; 

  constructor( private http : HttpClient , private router : Router) {}


  login( email : string  , password : string ){

    this.http.post<IUser>(this.userApi , { email , password }).subscribe((user)=>{
     
      const token = user.acces_token; 
      localStorage.setItem(this.key , token);
      this.currentUser$.next(user); 
      this.router.navigate(['/container'])
    })

  }

  isLoggedIn$() : Observable<boolean>{
    return  this.currentUser$.pipe(
      map(user=>  !!user)
    )
  }

  isLoggedInNow(){
    this.currentUser$.value; 
  }

  userProfile$() : Observable<IUser | null>{
   return this.currentUser$.asObservable(); 
  }


}
