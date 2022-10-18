import { Injectable } from '@angular/core';
import { User } from '@core/models/user.model';
import { ContactComponent } from '@public/contact/contact.component';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Injectable({
    providedIn: 'root'
})
export class UserManagerService {

    private static userManagerService: UserManagerService

    public currentUser: User | undefined = undefined

    private constructor(private _http: HttpClient) {}

    public static manage() {
        if (UserManagerService.userManagerService == undefined) {
            UserManagerService.userManagerService = new UserManagerService(AppComponent._http)
            return UserManagerService.userManagerService
        } else {
            return UserManagerService.userManagerService
        }
    }

    public isLogged(): boolean {
        if (this.currentUser == undefined) {
            return false
        } else {
            return true
        }
    }

    public logOut() {
        if (this.isLogged()) {
            this.currentUser = undefined
            this.clearToken()
        }
    }

    public logIn(un: string, pass: string): Observable<string>{

        const status$ : Subject<string> = new Subject<string>()
        const status : Observable<string> = status$.asObservable()

        this.getUserToken().subscribe({
            error: (err) => {status$.error("Error")},
            next: (data) => 
            {
                this.setToken(data.data.id)
                status$.next("Todo good")
                this.currentUser = new User()
            }
        })

        return status
    }

    private getUserToken(): Observable<any> {
        return this._http.get("https://reqres.in/api/users/11")
    }

    private clearToken() {
        if (sessionStorage.getItem("session_token") != null) {
            sessionStorage.removeItem("session_token")
        }
    }

    private setToken(token : string) {
        sessionStorage.setItem("session_token", token)
    }

    private getToken() : any {
        if (sessionStorage.getItem("session_token") != null) {
            return sessionStorage.getItem("session_token") 
        }
    }

    private getUserInfo() : Observable<any> {
        return this._http.post("https://reqres.in/api/users/11", "{token : "+ this.getToken() + "}")
    }

    public setUserInfo() {
    }



}