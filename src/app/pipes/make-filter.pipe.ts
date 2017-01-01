import { Pipe, PipeTransform } from '@angular/core';

import { ItemListing } from './../models/item-listing.model';

@Pipe({
    name: 'makeFilter'
})
export class MakeFilterPipe implements PipeTransform {

    transform(array: ItemListing[], makefilter: String): ItemListing[] {
        if (!makefilter) {
            return array;
        }

        return array.filter(x => x.make === makefilter);
    }
}
