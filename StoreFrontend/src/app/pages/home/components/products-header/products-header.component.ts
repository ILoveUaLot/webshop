import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {

}
