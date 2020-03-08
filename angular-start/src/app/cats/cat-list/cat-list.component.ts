import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatService } from '../services/cat.service';

const SUCCESS_STATUS = 204;
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
    this.loadCats();
  }

  updateCat({ type, cat }) {
    this.catService.updateCat(cat).subscribe(r => {
      if (r.status === SUCCESS_STATUS) {
        this.loadCats();
        this.catService.notifyReload({ type });
      }
    });
  }

  loadCats() {
    this.catlist$ = this.catService.getCat();
  }
}
