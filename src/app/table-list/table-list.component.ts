import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MedicineService } from 'app/medicine.service';
import { Observable, ReplaySubject } from 'rxjs';


export interface MedicineData {
  
  medicineId: number;
  medicineName: string;
  medicineDescription: string;
  medicinePrice: number;
  medicineQuantity: number;
  genericId: number;
  
}

const ELEMENT_DATA: MedicineData[] = [];

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})



export class TableListComponent implements OnInit {

  opened = false;
  public medicine = ELEMENT_DATA;
  public dataSource: MatTableDataSource<MedicineData>;
  dataToDisplay = this.medicine;


  ngOnInit() {
    this.getMedicine();
    
  }

  constructor (private medicineService : MedicineService) {
    this.dataSource = new MatTableDataSource<MedicineData>([]);
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
  
  
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.data = [...this.dataSource.data, ELEMENT_DATA[randomElementIndex]];

  }

  removeData() {
  this.dataSource.data = this.dataSource.data.slice(0, -1);
  }
}
  
    



