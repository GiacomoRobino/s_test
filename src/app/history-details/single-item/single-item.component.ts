import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { nodeModel } from 'src/app/models/nodeModel';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent {
  @Input() item !: nodeModel;
  @Input() prefix: string = "";
  @Input() suffix: string = "";
  @Output() selectNode = new EventEmitter<nodeModel>();
  @HostListener('click', ['$event']) onClick(e: any) {
    this.selectNode.emit(this.item);
  };

}
