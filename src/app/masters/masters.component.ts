import { Component, OnInit, Input } from '@angular/core';
import {Master} from './master.model'

@Component({
  selector: 'jad-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.sass']
})
export class MastersComponent implements OnInit {

  @Input() master: Master;
  constructor() { }

  ngOnInit(): void {
  }

  clicked(e: Event): void {
    e.preventDefault();
    
    console.log(this.master.name);
  }
}
