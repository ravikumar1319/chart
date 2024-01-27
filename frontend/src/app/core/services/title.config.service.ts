import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TitleConfig } from '../config/title.config';
import { Observable, of } from 'rxjs';
import * as objectPath from 'object-path';
@Injectable({
  providedIn: 'root'
})
export class TitleConfigService {

  constructor(
    private router: Router
  ) { }

  getCleanUrl(url: string) {
    console.log(url.split("/"))
    return url.split("/").filter(ele => { return ele != '' }).join(".")
  }

  getTitle() {
    const newUrl = this.getCleanUrl(this.router.url)
    const titleConfig = new TitleConfig().configs
    const { title } = objectPath.get(titleConfig, newUrl) || {}
    console.log(title);

    return of(title);
  }


}
