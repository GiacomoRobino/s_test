import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oneElementInHistory',
  pure: false
})
export class OneElementInHistoryPipe implements PipeTransform {

  transform(value: Array<any> | null, ...args: unknown[]): unknown {
    if (value) {
      return value.length === 1;
    }
    else {
      return false
    }
  }

}
