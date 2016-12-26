import 'rxjs/add/operator/switchMap';
import { ApiUrlsConfigService } from './../../services/api-urls-config.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        const itemListingId = params['id'];
        return this.userService.addItemToUserFavorites(itemListingId);
      })
      .subscribe((response) => {

      }, (err) => {
        console.log(err);
      }, () => {
        this.router.navigateByUrl('favorites');
      });
  }
}
