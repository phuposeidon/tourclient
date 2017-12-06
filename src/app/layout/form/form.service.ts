import { Injectable } from "@angular/core";
import { Http, Response ,Headers,RequestOptions} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class FormService{
    headers = new Headers();
    private apiUrl = "http://localhost:3000/api/post";
    constructor(private http: Http) {
  
    }
    

    uploadFile(formData:any,dataSource:any):Observable<any[]>{
        this.headers = new Headers();
        this.headers.append('enctype', 'multipart/form-data');
        let url = "http://localhost:3000/api/post/create?content="+dataSource.content+"&price="+dataSource.price+"&title="+dataSource.title+"&extraPrice="+dataSource.extraPrice+"&days="+dataSource.days+"&category="+dataSource.category+"";
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(url,formData,options).map((response: Response) => response.json());
    }
}