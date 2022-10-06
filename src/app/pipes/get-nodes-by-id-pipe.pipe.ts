import { Pipe, PipeTransform } from '@angular/core';
import { nodeModel } from '../models/nodeModel';
import { GetNodesServiceService } from '../services/get-nodes-service.service';

@Pipe({
  name: 'getNodesByIdPipe'
})
export class GetNodesByIdPipePipe implements PipeTransform {

  constructor(private getNodesService: GetNodesServiceService) { };

  transform(value: Array<string>, ...args: unknown[]): Array<nodeModel> {
    return value.map((nodeId: string) => this.getNodesService.getNodeById(nodeId));
  }

}
