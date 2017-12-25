import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > 0) {
      const sortByName = (a, b) => {
        if (a.name < b.name) {
          return -a;
        }
        if (a.name > b.name) {
          return 1;
        }

        return 0;
      };

      return value.sort(sortByName);
    }

    return null;
  }

}
