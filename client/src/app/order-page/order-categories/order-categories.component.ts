import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../shared/services/categories.service";
import {Observable} from "rxjs";
import {Category} from "../../shared/interfaces";

@Component({
  selector: 'app-order-categories',
  templateUrl: './order-categories.component.html',
  styles: []
})
export class OrderCategoriesComponent implements OnInit {

  categories$: Observable<Category[]>;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categories$ = this.categoriesService.fetch()
  }

}
