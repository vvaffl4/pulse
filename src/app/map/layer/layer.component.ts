import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { Layer } from 'ol/layer';
import Source from 'ol/source/Source';

@Component({ template: '' })
export class LayerComponent implements OnInit {
	protected instance: Layer = new Layer({});

	constructor(private host: MapComponent) {}

	ngOnInit(): void {
		this.host.instance.addLayer(this.instance);
	}

	reset() {
		this.instance.setSource(null);
	}

	setSource(source: Source) {
		this.instance.setSource(source);
	}
}
