import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { nodeModel } from '../models/nodeModel';
import { GetNodesServiceService } from './get-nodes-service.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationHistoryService {
  public navigationHistory: BehaviorSubject<Array<nodeModel>> = new BehaviorSubject<Array<nodeModel>>([]);

  constructor(private getNodesService: GetNodesServiceService) {
    this.navigationHistory.next([this.getNodesService.getFirstNode()])
  }

  getHistory() {
    return this.navigationHistory;
  }
}
