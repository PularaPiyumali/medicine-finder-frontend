import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicineService } from 'app/medicine.service';
import { PharmacyData } from 'app/pharmacy';


@Component({
  selector: 'app-pharmacy-registration',
  templateUrl: './pharmacy-registration.component.html',
  styleUrls: ['./pharmacy-registration.component.scss']
})
export class PharmacyRegistrationComponent implements OnInit {

  pharmacy_name: string = '';

  constructor(private medicineService : MedicineService, private router: Router) { }

  ngOnInit(): void {
  }

  onAddPharmacy(addForm: NgForm): void {
    this.medicineService.addPharmacy(addForm.value).subscribe(
      (response: PharmacyData) => {
        console.log(response);
        addForm.resetForm();
        this.router.navigate(['admin/add-pharmacy']);
        //this.router.navigate(['/login']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.resetForm();
      }
    );
  }

  location (){
    
  }

}
