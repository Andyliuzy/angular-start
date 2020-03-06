import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss']
})
export class CatDetailComponent implements OnInit {
  @Input() cat: Cat;

  constructor() {}

  ngOnInit() {}
}
