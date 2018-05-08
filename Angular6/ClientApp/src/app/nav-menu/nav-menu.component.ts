import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded: boolean = false;

  constructor(private _el: ElementRef) {
  }

  collapse() {
    this.isExpanded = false;
    this._el.nativeElement.querySelector('.navbar-collapse').classList.remove('show');
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
