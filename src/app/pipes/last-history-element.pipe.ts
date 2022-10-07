import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastHistoryElement',
  pure: false
})
export class LastHistoryElementPipe implements PipeTransform {

  transform(value: Array<any> | null, field: string): any | null {
    if (value === null || value === undefined) {
      return null;
    }
    else {
      return value[value.length - 1][field];
    }
  }

}
