import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserSearchData } from 'app/user.search';
import { UserSearchService } from 'app/user.search.service';

const ELEMENT_DATA: UserSearchData[] = [];

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.scss']
})
export class PharmacyDetailsComponent implements OnInit {

  public userSerach = ELEMENT_DATA;
  public dataSource: MatTableDataSource<UserSearchData>;
  dataToDisplay = this.userSerach;

  constructor(private userSearchService : UserSearchService) {
    this.dataSource = new MatTableDataSource<UserSearchData>([]);
   }

  ngOnInit(): void {
    
    this.searchData();
  }

  public searchData(): void {
    this.userSearchService.getSearchData().subscribe(
      (response: UserSearchData[]) => {
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
