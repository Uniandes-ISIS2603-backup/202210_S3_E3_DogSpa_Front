import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Servicio } from './servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl: string = environment.baseUrl + 'servicios'

  constructor(private http: HttpClient) { }

  getServicios(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.apiUrl);
  }

}
