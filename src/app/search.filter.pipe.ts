import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any[] {
    if (!list || !filterText) {
      return list;
    }

    filterText = filterText.toLowerCase();

    return list.filter(item => {
      if (item) {
        const medicineMatch = item.medicineName.toLowerCase().search(new RegExp(filterText, 'i')) > -1;
        const genericMatch = item.genericName.toLowerCase().search(new RegExp(filterText, 'i')) > -1;
        return medicineMatch || genericMatch;
      }
      return false;
    });
  }
}
