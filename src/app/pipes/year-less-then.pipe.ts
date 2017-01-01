import { Pipe, PipeTransform } from '@angular/core';

import { ItemListing } from './../models/item-listing.model';

@Pipe({
    name: 'yearLessThen'
})
export class YearLessThenPipe implements PipeTransform {

    transform(array: ItemListing[], yearLessThen: Number): ItemListing[] {
        if (!yearLessThen) {
            return array;
        }

        return array.filter(x => x.year <= yearLessThen);
    }
}
