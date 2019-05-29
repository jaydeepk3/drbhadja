import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {}
   public get<T>(apiPath): Observable<T> {
    console.log(apiPath);
    return this.http.get<T>(apiPath);
}

public post<T>(apiPath, data: any): Observable<T> {
    return this.http.post<T>(apiPath, data);
}

}
