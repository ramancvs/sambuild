// Typing for Ammap
/// <reference path="../../shared/typings/ammaps/ammaps.d.ts" />

import { Component, AfterViewInit } from '@angular/core';
import { ThemeConstants } from '../../shared/config/theme-constant'; 

@Component ({
    templateUrl: 'vector-map.html'
})

export class VectorMapComponent {

    constructor(private colorConfig:ThemeConstants) { 
    }

    ngAfterViewInit() { 
    }
}