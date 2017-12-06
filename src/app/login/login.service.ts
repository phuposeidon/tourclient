import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()

export class LoginService {
    headers = new Headers();
    private apiUrl = "http://localhost:3000/api/user/login";
    constructor(private http: Http) {

    }

    login(data: any): Observable<any[]> {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: this.headers });
        return this.http.put(this.apiUrl, data, options).map((response: Response) => response.json());
    }

    public isAuthenticated():any {
        const isAuthenticated = localStorage.getItem('isLoggedin');
        // Check whether the token is expired and return
        // true or false
       return isAuthenticated;
      }
}