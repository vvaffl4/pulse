import { Component, OnInit } from '@angular/core';
import MapBrowserEvent from 'ol/MapBrowserEvent';

/**
 * Overview Component - Shows an overview of all alerts
 */
@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.sass'],
})
export class OverviewComponent implements OnInit {
	// map?: Map = undefined;

	ngOnInit() {
		// this.map = new Map({
		// 	target: 'map',
		// 	layers: [
		// 		new TileLayer({
		// 			source: new OSM(),
		// 		}),
		// 	],
		// 	view: new View({
		// 		center: [0, 0],
		// 		zoom: 2,
		// 	}),
		// 	controls: [],
		// });
		// this.map.on('singleclick', (event) => {
		// 	const coordinate = event.coordinate;
		// });
	}

	handleMapClick(event: MapBrowserEvent<MouseEvent>) {
		console.log(event.coordinate);
	}
}
