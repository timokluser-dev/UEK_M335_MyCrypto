import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HoldingsService} from '../services/holdings/holdings.service';
import {Holding} from '../models/Holding';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  public key: string | null;
  public holding: Holding | null;

  public model: Holding = {
    _key: null,
    symbol: '',
    amount: 0,
    exchange: '',
    owner: null,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private holdingsService: HoldingsService
  ) {
    this.key = this.activatedRoute.snapshot.paramMap.get('key');

    !this.isNewRecord &&
      this.holdingsService
        .getByKey(this.key)
        .then(value => (this.holding = value))
        .then(() => (this.model = this.holding));
  }

  ngOnInit() {}

  public get isNewRecord(): boolean {
    return this.key === null;
  }

  public save(): void {
    // TODO make validation
    if (this.key) {
      this.holdingsService.update(this.key, this.model);
    } else {
      this.holdingsService.create(this.model);
    }

    this.router.navigate(['/ui/home']);
  }
}
