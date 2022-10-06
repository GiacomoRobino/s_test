import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  @Input() itemId: string = "";
  @Input() prefix: string = "";
  @Input() suffix: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
