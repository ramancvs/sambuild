// Typing for Ammap
/// <reference path="../shared/typings/ammaps/ammaps.d.ts" />

import { Component, AfterViewChecked } from '@angular/core';
import { ThemeConstants } from '../shared/config/theme-constant';
   

@Component({
    templateUrl: 'dashboard.html'
})

export class DashboardComponent {
  
    constructor(private colorConfig:ThemeConstants) {  
    } 
    ngAfterViewInit() {
        

         
    } 
}
