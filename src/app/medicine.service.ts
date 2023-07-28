import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { MedicineData } from "./medicine";
import { PharmacyData } from "./pharmacy";
import { LocationData } from "./location";

@Injectable({providedIn: 'root'})

export class MedicineService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getMedicine(): Observable<MedicineData[]> {
      return this.http.get<MedicineData[]>(`${this.apiServerUrl}/medicines/all`);
    }

    public addMedicine(medicine: MedicineData): Observable<MedicineData> {
      return this.http.post<MedicineData>(`${this.apiServerUrl}/medicines`, medicine);
    }

    public addPharmacy(pharmacy: PharmacyData): Observable<PharmacyData> {
      return this.http.post<PharmacyData>(`${this.apiServerUrl}/pharmacies`, pharmacy);
    }
    
    updateMedicine(medicine: MedicineData): Observable<MedicineData> {
      return this.http.put<MedicineData>(`${this.apiServerUrl}/medicines/${medicine.medicineId}`, medicine);
    }

    public deleteMedicine(medicineId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/medicines/${medicineId}`);
    }

    

}