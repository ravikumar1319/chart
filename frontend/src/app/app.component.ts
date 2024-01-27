import { Component, OnInit } from '@angular/core';
import { TitleConfigService } from './core/services/title.config.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';

  constructor(
    private _titleConfigService: TitleConfigService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(
        () => this._titleConfigService.getTitle().subscribe(res => {
          this.title = res
        })
      );
  }

}
