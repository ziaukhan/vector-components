/// <reference path="./../../typings/tsd.d.ts" />

import {VComponentSettings} from './VComponentSettings';

export interface VButtonSettings extends VComponentSettings {
	 
	radius: number;
    stroke: string;
    strokeWidth: number;
    transparancy: number;
    fill: string;
}