/// <reference path="./../../typings/tsd.d.ts" />

import {VComponentSettings} from './VComponentSettings';


export abstract class VAbstractComponentDelegate{
	protected settings: VComponentSettings;
	
	constructor(settings: VComponentSettings){
		this.settings = settings;
		this.init();
	}
	
	abstract init()
} 