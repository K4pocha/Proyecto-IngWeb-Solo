// details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selectedItem: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Retrieve the selected item from the data service
    this.selectedItem = this.dataService.selectedItem;
  }
}
