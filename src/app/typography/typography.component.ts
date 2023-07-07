import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MedicineData } from 'app/medicine';
import { MedicineService } from 'app/medicine.service';


const ELEMENT_DATA: MedicineData[] = [];

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  public medicine = ELEMENT_DATA;
  public dataSource: MatTableDataSource<MedicineData>;
  dataToDisplay = this.medicine;
  searchText: '';

  constructor (private medicineService : MedicineService) {
    this.dataSource = new MatTableDataSource<MedicineData>([]);
  }

  ngOnInit() {
    this.getMedicine();
  }

  public getMedicine(): void {
    this.medicineService.getMedicine().subscribe(
      (response: MedicineData[]) => {
        this.dataToDisplay = response;
        this.dataSource = new MatTableDataSource(this.dataToDisplay);
        console.log(this.dataToDisplay);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
