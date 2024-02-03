import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  sort = "desc";
  itemsShowCount = 12;
  onSortUpdated(newSort:string): void
  {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void
  {
    this.itemsShowCount = count;
  }
}
