import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

/**
 * Overview Component - Shows an overview of all alerts
 */
@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.sass'],
})
export class OverviewComponent implements OnInit {
	map?: Map = undefined;

	ngOnInit() {
		this.map = new Map({
			target: 'map',
			layers: [
				new TileLayer({
					source: new OSM(),
				}),
			],
			view: new View({
				center: [0, 0],
				zoom: 2,
			}),
			controls: [],
		});

		this.map.on('singleclick', (event) => {
			const coordinate = event.coordinate;
		});
	}
}
