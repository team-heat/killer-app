import { Pipe, PipeTransform } from '@angular/core';

import { ItemListing } from './../models/item-listing.model';

@Pipe({
    name: 'priceLessThen'
})
export class PriceLessThenPipe implements PipeTransform {

    transform(array: ItemListing[], priceLessThen: Number): ItemListing[] {
        if (!priceLessThen) {
            return array;
        }

        return array.filter(x => x.price <= priceLessThen);
    }
}
