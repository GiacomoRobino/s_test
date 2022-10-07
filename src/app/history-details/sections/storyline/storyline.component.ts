import { Component } from '@angular/core';
import { NavigationHistoryService } from 'src/app/services/navigation-history.service';

@Component({
  selector: 'app-storyline',
  templateUrl: './storyline.component.html',
  styleUrls: ['./storyline.component.css']
})
export class StorylineComponent {
  public navigationHistory = this.navigationHistoryService.getHistory();

  constructor(private navigationHistoryService: NavigationHistoryService) { }

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
