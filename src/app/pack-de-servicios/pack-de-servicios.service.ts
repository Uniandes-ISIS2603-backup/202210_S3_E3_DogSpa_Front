import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PackDeServiciosDetail } from './pack-de-servicios-detail';

@Injectable({
  providedIn: 'root'
})
export class PackDeServiciosService {

  private apiUrl: string = environment.baseUrl + '/packdeservicios';

  constructor(private http: HttpClient) { }

  getPacksDeServicio(id: string): Observable<PackDeServiciosDetail> {
    return this.http.get<PackDeServiciosDetail>(this.apiUrl + '/' + id);
  }

  getPacksDeServicios(): Observable<PackDeServiciosDetail[]> {
    return this.http.get<PackDeServiciosDetail[]>(this.apiUrl);
  }

}
