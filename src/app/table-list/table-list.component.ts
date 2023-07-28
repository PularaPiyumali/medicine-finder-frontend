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
  isEdit: boolean = false;
  filterValue: string = '';



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

  

  toggleAddForm() {
    this.isAdding = !this.isAdding;
  }

  onEdit(item:any){
    this.dataToDisplay.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }


  editRow(row: MedicineData) {
    this.medicineService.updateMedicine(row).subscribe(response => {
      console.log(response)
    });
    
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
  
    



