import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  catlist$: Observable<any>;
  isLoading = false;
  constructor(private catService: CatService) {}

  ngOnInit() {
    this.catlist$ = this.catService.getCat();
  }
}
