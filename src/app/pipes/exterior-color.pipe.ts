import { Pipe, PipeTransform } from '@angular/core';

import { ItemListing } from './../models/item-listing.model';

@Pipe({
    name: 'exteriorColorFilter'
})
export class ExteriorColorFilterPipe implements PipeTransform {

    transform(array: ItemListing[], exteriorColorFilter: String): ItemListing[] {
        if (!exteriorColorFilter) {
            return array;
        }

        return array.filter(x => x.exteriorColor === exteriorColorFilter);
    }
}
