import { MapComponent } from '../map.component';
import { Component, OnInit } from '@angular/core';
import { LayerComponent } from './layer.component';
import VectorLayer from 'ol/layer/Vector';

@Component({
	selector: 'map-vector-layer',
	template: `<ng-content></ng-content>`,
})
export class VectorLayerComponent extends LayerComponent implements OnInit {
	constructor(host: MapComponent) {
		super(host);
	}
	override ngOnInit() {
		this.instance = new VectorLayer();
		super.ngOnInit();
	}
}
