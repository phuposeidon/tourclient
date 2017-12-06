import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()

export class TableService {
    private apiUrl = "http://localhost:3000/api/post";
    constructor(private http: Http) {

    }

    getTour(): Observable<any[]> {
        return this.http.get(this.apiUrl).map((response: Response) => response.json());
    }

    deleteTour(id: any): Observable<any[]> {
        return this.http.delete(this.apiUrl + "/" + id).map((response: Response) => {
            return response.json();
        });
    }
}