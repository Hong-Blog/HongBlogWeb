import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(keyword: string, pageIndex: number = 1, pageSize: number = 15): Observable<any> {
    const url = '/api/users';
    const param = new HttpParams()
      .set('keyWord', keyword)
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get(url, {params: param});
  }
}
