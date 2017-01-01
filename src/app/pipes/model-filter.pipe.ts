import { Pipe, PipeTransform } from '@angular/core';

import { ItemListing } from './../models/item-listing.model';

@Pipe({
    name: 'modelFilter'
})
export class ModelFilterPipe implements PipeTransform {

    transform(array: ItemListing[], modelFilter: String): ItemListing[] {
        if (!modelFilter) {
            return array;
        }

        return array.filter(x => x.model === modelFilter);
    }
}
