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
    const url = '/v1/uc/users';
    const param = new HttpParams()
      .set('keyWord', keyword)
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get(url, {
      params: param
    });
  }

  addUser(value: { userName: string, password: string, nickName: string, mobile: string, email: string, qq: string })
    : Observable<any> {
    const url = '/v1/uc/users';
    return this.http.post(url, value);
  }

  deleteUser(id: number): Observable<any> {
    const url = '/v1/uc/users/' + id;
    return this.http.delete(url);
  }
}
