import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceCourseService {

  constructor(private http: HttpClient) { }

    //************* METHODS ********************/
  //*******************************************************/
  /*** HTTP GET - GET ALL*/
  public GetAll(): Observable<any> {
    const url = `${environment.apiCourse}`;
    return this.http.get(url);    
  }

    /*** HTTP GET - GET BY ID */
    public GetById(id: number): Observable<any> {
      const url = `${environment.apiCourse}/${id}`;
      return this.http.get(url);    
    }

    /*** HTTP POST  */
    public Add(item: any): Observable<any> {
      const url = `${environment.apiCourse}`;
      return this.http.post(url, item);    
    }    

     /*** HTTP DELETE  */
    public Delete(id: number): Observable<any> {
      const url = `${environment.apiCourse}/${id}`;
      return this.http.delete(url);    
    }  
}
