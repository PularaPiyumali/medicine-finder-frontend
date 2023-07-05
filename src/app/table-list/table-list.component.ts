import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MedicineData } from 'app/medicine';
import { MedicineService } from 'app/medicine.service';
import { PharmacyData } from 'app/pharmacy';





const ELEMENT_DATA: MedicineData[] = [];

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})



export class TableListComponent implements OnInit {

  pharmacy_name: string = '';
  opened = false;
  public medicine = ELEMENT_DATA;
  public dataSource: MatTableDataSource<MedicineData>;
  dataToDisplay = this.medicine;
  isAdding: boolean = false; // Flag to track whether the add form is visible
  filterValue: string = ''; 
  editingRowIndex: number = -1;



  ngOnInit() {
    this.getMedicine();
    
  }

  constructor (private medicineService : MedicineService) {
    this.dataSource = new MatTableDataSource<MedicineData>([]);
  }

  
  public onAddMedicine(addForm: NgForm): void {
    this.medicineService.addMedicine(addForm.value).subscribe(
      (response: MedicineData) => {
        console.log(response);
        this.getMedicine();
        addForm.resetForm();
        this.toggleAddForm();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.resetForm();
      }
    );
  }

  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  
  removeRow(id: number) {
    this.medicineService.deleteMedicine(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (m: MedicineData) => m.medicineId !== id
      );
    });
  }

  

  onAddPharmacy(addForm: NgForm): void {
    this.medicineService.addPharmacy(addForm.value).subscribe(
      (response: PharmacyData) => {
        console.log(response);
        addForm.resetForm();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.resetForm();
      }
    );
  }
  



//  onAddEmloyee(addForm: NgForm) {
//     console.log(addForm.value);  // { first: '', last: '' }
//     console.log(addForm.valid);  // false

// }
  



  toggleAddForm() {
    this.isAdding = !this.isAdding;
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
  
    



