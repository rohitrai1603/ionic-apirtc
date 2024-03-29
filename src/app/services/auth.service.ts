import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = true;
  token: any;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
    private router: Router,
    private toastController: ToastController
  ) { }

  login(email: String, password: String): Observable<any> {
    this.isLoggedIn = true;
    return this.http
      .post(this.env.API_URL + '/login', { email: email, password: password })
      .pipe(map(response => {
        this.isLoggedIn = true;
        return response;
      }),
        catchError(error => { return error; })
      )
  }

  joinroom(roomname: String): Observable<any> {
    return this.http
      .get(this.env.API_URL + '/room/' + roomname, {})
      .pipe(map(response => {
        // this.isLoggedIn = true;
        return response;
      }),
        catchError(error => { return error; })
      )
  }
  createroom(roomname: String): Observable<any> {
    return this.http
      .post(this.env.API_URL + '/room', { roomname: roomname })
      .pipe(map(response => {
        // this.isLoggedIn = true;
        return response;
      }),
        catchError(error => { return error; })
      )
  }

  register(fName: String, lName: String, email: String, password: String) {
    return this.http.post(this.env.API_URL + 'auth/register',
      { fName: fName, lName: lName, email: email, password: password }
    )
  }

  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + " " + this.token["access_token"]
    });

    return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
      .pipe(
        tap(data => {
          this.storage.remove("token");
          this.isLoggedIn = false;
          delete this.token;
          return data;
        })
      )
  }

  // user() {
  //   const headers = new HttpHeaders({
  //     'Authorization': this.token["token_type"] + " " + this.token["access_token"]
  //   });

  //   return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
  //     .pipe(
  //       tap(user => {
  //         return user;
  //       })
  //     )
  // }

  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;

        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = true;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn = true;
      }
    );
  }
}
