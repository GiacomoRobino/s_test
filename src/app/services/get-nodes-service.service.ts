import { Injectable } from '@angular/core';
import { nodeModel } from '../models/nodeModel';

@Injectable({
  providedIn: 'root'
})
export class GetNodesServiceService {
  private mockNodes: Array<nodeModel> = [{
    id: "0",
    detail: "description 0",
    subNodesId: ["1", "2"]
  },
  {
    id: "1",
    detail: "description 1",
    subNodesId: ["3"]
  },
  {
    id: "2",
    detail: "description 2",
    subNodesId: []
  },
  {
    id: "3",
    detail: "description 3",
    subNodesId: ["1"]
  }
  ]

  constructor() { }

  getNodeById(id: string): nodeModel {
    return this.mockNodes.filter(node => node.id === id)[0]
  }

  getFirstNode(): nodeModel {
    return this.mockNodes[0]
  }
}
