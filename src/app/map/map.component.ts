import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map.js';

@Component({
	selector: 'app-map',
	// templateUrl: './map.component.html',
	template: `<div id="map" [style.width]="width" [style.height]="height"></div>
		<ng-content></ng-content>`,
	styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnInit {
	public readonly instance: Map = new Map();
	width = 500;
	height = 500;

	ngOnInit() {
		this.instance.setTarget('map');
	}
}
