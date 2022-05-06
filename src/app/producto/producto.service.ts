import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Producto } from './producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getProductosenSede(idSede: string): Observable<Producto[]>
{
  var url = this.apiUrl+'sedes/'+idSede+'/productos';
  console.log(url);
  return this.http.get<Producto[]> (url);// localhost:8080/api/sedes/idsede/productos
}



}
