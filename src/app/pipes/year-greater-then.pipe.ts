import { Pipe, PipeTransform } from '@angular/core';

import { ItemListing } from './../models/item-listing.model';

@Pipe({
    name: 'yearGreaterThen'
})
export class YearGreaterThenPipe implements PipeTransform {

    transform(array: ItemListing[], yearGreaterThen: Number): ItemListing[] {
        if (!yearGreaterThen) {
            return array;
        }

        return array.filter(x => x.year >= yearGreaterThen);
    }
}