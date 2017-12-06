import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()

export class GridService {
    constructor(private http: Http) {

    }
    getById(id: String): Observable<any[]> {
        return this.http.get("http://localhost:3000/api/post/" + id).map((response: Response) => response.json());
    }

    updateById(id: String,dataSource:any): Observable<any[]> {
        return this.http.put("http://localhost:3000/api/post/" + id,dataSource).map((response: Response) => response.json());
    }
}
