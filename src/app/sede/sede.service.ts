import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sede } from './sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private apiUrl : string = environment.baseUrl +'sede';

  constructor(private http:HttpClient) { }

  getSedes(): Observable<Sede[]>
  {
    return this.http.get<Sede[]> (this.apiUrl);
  }
}
