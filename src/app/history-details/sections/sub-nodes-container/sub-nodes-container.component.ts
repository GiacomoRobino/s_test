import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { nodeModel } from 'src/app/models/nodeModel';
import { GetNodesServiceService } from 'src/app/services/get-nodes-service.service';


@Component({
  selector: 'app-sub-nodes-container',
  templateUrl: './sub-nodes-container.component.html',
  styleUrls: ['./sub-nodes-container.component.css']
})
export class SubNodesContainerComponent implements OnInit {
  @Input() navigationHistory !: BehaviorSubject<Array<nodeModel>>;

  constructor(private getNodesService: GetNodesServiceService) { }

  ngOnInit(): void {
  }

  selectNode(nodeId: string) {
    const currentNavigationHistory = this.navigationHistory.getValue();
    currentNavigationHistory.push(this.getNodesService.getNodeById(nodeId));
    this.navigationHistory.next(currentNavigationHistory);
  }

}
