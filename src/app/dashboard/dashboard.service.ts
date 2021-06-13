import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/layout/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://dio-bootcampsantander.herokuapp.com/bootcamp'

  constructor(private http: HttpClient  ) { }

  async getStocks(): Promise<Stock[]> {
     return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}