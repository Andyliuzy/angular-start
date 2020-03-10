import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss']
})
export class ActionPanelComponent implements OnInit {
  private catValue: Cat;
  @Input()
  set cat(value: Cat) {
    this.catValue = value;
  }
  get cat(): Cat {
    return this.catValue;
  }

  constructor() {}

  ngOnInit() {}
}
