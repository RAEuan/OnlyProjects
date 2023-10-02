import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private uriApi = 'https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.uriApi);
  }
}
