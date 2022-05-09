import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sede } from './sede';
import { SedeDetail } from './sede-detail';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private apiUrl : string = environment.baseUrl +'sede';

  constructor(private http:HttpClient) { }

  getSedes(): Observable<SedeDetail[]>
  {
    return this.http.get<SedeDetail[]> (this.apiUrl);
  }

  getSede(id: string): Observable<SedeDetail>
  {
    return this.http.get<SedeDetail> (this.apiUrl+'/'+id);
  }
}
