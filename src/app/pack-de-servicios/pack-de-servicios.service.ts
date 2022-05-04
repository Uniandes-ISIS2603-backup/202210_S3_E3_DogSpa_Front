import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PackDeServicios } from './packDeServicios';

@Injectable({
  providedIn: 'root'
})
export class PackDeServiciosService {

  private apiUrl: string = environment.baseUrl + '/packDeServicios';

  constructor(private http: HttpClient) { }

  getPacksDeServicios(): Observable<PackDeServicios[]> {
    return this.http.get<PackDeServicios[]>(this.apiUrl);
  }

}
