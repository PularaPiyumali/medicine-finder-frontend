import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MedicineData } from 'app/medicine';
import { MedicineService } from 'app/medicine.service';
import { UserSearchData } from 'app/user.search';
import { UserSearchService } from 'app/user.search.service';


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
  searchName: string = '';
  matchedMedicine: any

  constructor (private medicineService : MedicineService, private userSearchService : UserSearchService) {
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

  // public saveSearchData(addForm: NgForm): void {
  //   this.userSearchService.search(addForm.value).subscribe(
  //     (response: UserSearchData) => {
  //       console.log(response);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       addForm.resetForm();
  //     }
  //   );
  // }

  public saveSearchData(addForm: NgForm): void {
    const searchValue = addForm.value?.searchName?.toLowerCase();
    console.log(searchValue);
    this.medicineService.getMedicine().subscribe(
      (response: MedicineData[]) => {
        this.medicine = response;
        console.log(this.medicine);
        const matchedMedicine = this.medicine.find(
          (medicine) => medicine.medicine_name.toLowerCase() === searchValue()
        );
    
        console.log(matchedMedicine);
        if (matchedMedicine) {
          this.userSearchService.search(addForm.value).subscribe(
            (response: UserSearchData) => {
              console.log(response);
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
              addForm.resetForm();
            }
          );
        } else {
          
          console.log('Medicine not found!');
          addForm.resetForm();
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }
  
  

}
