import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { nodeModel } from '../models/nodeModel';
import { GetNodesServiceService } from '../services/get-nodes-service.service';
import { NavigationHistoryService } from '../services/navigation-history.service';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent implements OnInit {

  constructor(private navigationHistoryService: NavigationHistoryService) { }

  public currentNode !: nodeModel;

  public navigationHistory: BehaviorSubject<Array<nodeModel>> = new BehaviorSubject<Array<nodeModel>>([]);

  ngOnInit(): void {
    this.navigationHistory = this.navigationHistoryService.getHistory()
  }

}
