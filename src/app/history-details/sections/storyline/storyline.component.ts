import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { nodeModel } from 'src/app/models/nodeModel';

@Component({
  selector: 'app-storyline',
  templateUrl: './storyline.component.html',
  styleUrls: ['./storyline.component.css']
})
export class StorylineComponent implements OnInit {
  @Input() navigationHistory !: BehaviorSubject<Array<nodeModel>>;

  constructor() { }

  ngOnInit(): void {
  }

  selectNode(nodeIndex: number) {
    const currentNavigationHistory = this.navigationHistory.getValue();
    this.navigationHistory.next(currentNavigationHistory.slice(0, nodeIndex + 1));
  }

  goBack() {
    if (this.navigationHistory.getValue().length > 1) {
      const currentNavigationHistory = this.navigationHistory.getValue();
      this.navigationHistory.next(currentNavigationHistory.slice(0, -1));
    }
  }

}
