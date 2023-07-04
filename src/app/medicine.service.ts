import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { MedicineData } from "./table-list/table-list.component";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class MedicineService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getMedicine(): Observable<MedicineData[]> {
      return this.http.get<MedicineData[]>(`${this.apiServerUrl}/medicines/all`);
    }

}