import { Component } from '@angular/core';
import { nodeModel } from 'src/app/models/nodeModel';
import { GetNodesServiceService } from 'src/app/services/get-nodes-service.service';
import { NavigationHistoryService } from 'src/app/services/navigation-history.service';


@Component({
  selector: 'app-sub-nodes-container',
  templateUrl: './sub-nodes-container.component.html',
  styleUrls: ['./sub-nodes-container.component.css']
})
export class SubNodesContainerComponent {
  public navigationHistory = this.navigationHistoryService.getHistory();

  constructor(private getNodesService: GetNodesServiceService, private navigationHistoryService: NavigationHistoryService) { }


  selectNode(node: nodeModel) {
    const currentNavigationHistory = this.navigationHistory.getValue();
    currentNavigationHistory.push(this.getNodesService.getNodeById(node.id));
    this.navigationHistory.next(currentNavigationHistory);
  }

}
