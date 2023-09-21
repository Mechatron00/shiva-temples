import { Pipe, PipeTransform } from '@angular/core';
import { temples } from '../data/temple-data';
import { mantras } from '../data/mantras';

@Pipe({
  name: 'filter',
})
export class SearchPipe implements PipeTransform {
  transform(temple: temples[], name: string): temples[] {
    if (name) {
      return temple.filter((data) => {
        return data.basic.name.toLowerCase().match(name);
       });
    } else return temple;
  }
}
