import { MapComponent } from '../map.component';
import { Component, OnInit } from '@angular/core';
import TileLayer from 'ol/layer/Tile';
import { LayerComponent } from '../layer/layer.component';

@Component({
	selector: 'app-tilelayer',
	template: `<ng-content></ng-content>`,
	styleUrls: ['./tilelayer.component.sass'],
})
export class TilelayerComponent extends LayerComponent implements OnInit {
	constructor(host: MapComponent) {
		super(host);
	}
	override ngOnInit() {
		this.instance = new TileLayer();
		super.ngOnInit();
	}
}
