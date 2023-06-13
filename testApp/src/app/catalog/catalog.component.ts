import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalogItems: any[]; // Declare the catalogItems property
  filteredItems: any[];
  categories: string[];
  selectedCategory: string;

  constructor(private router: Router, private dataService: DataService, private http: HttpClient) {
    this.catalogItems = [];
    this.filteredItems = [];
    this.categories = [];
    this.selectedCategory = '';
  }

  ngOnInit() {
    this.http.get<any[]>('assets/data.json').subscribe(
      (data) => {
        this.catalogItems = data; // Assign the fetched data to the catalogItems property
        this.filteredItems = data; // Set the initial filtered items
        this.categories = Array.from(new Set(data.map(item => item.category))); // Get unique categories
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filterItemsByCategory(category: string) {
    this.selectedCategory = category;
    if (category === '') {
      this.filteredItems = this.catalogItems; // Show all items if no category is selected
    } else {
      this.filteredItems = this.catalogItems.filter(item => item.category === category); // Filter items by category
    }
  }

  showDetails(item: any) {
    this.dataService.selectedItem = item;
    const itemId = this.filteredItems.findIndex(i => i.id === item.id);
    this.router.navigate(['/catalog/details', itemId]);
  }
}
