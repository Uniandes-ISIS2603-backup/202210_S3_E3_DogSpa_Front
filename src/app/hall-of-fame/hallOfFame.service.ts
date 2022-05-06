import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HallOfFame } from '../hall-of-fame';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {

  private apiUrl: string = environment.baseUrl + 'hallOfFame';

  constructor(private http: HttpClient) { }

  getHallsOfFame(): Observable<HallOfFame[]> {
    return this.http.get<HallOfFame[]>(this.apiUrl);
  }
}
