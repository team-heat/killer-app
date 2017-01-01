import { Pipe, PipeTransform } from '@angular/core';

import { ItemListing } from './../models/item-listing.model';

@Pipe({
    name: 'priceGreaterThen'
})
export class PriceGreaterThenPipe implements PipeTransform {

    transform(array: ItemListing[], priceGreaterThen: Number): ItemListing[] {
        if (!priceGreaterThen) {
            return array;
        }

        return array.filter(x => x.price >= priceGreaterThen);
    }
}