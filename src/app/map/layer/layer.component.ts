import { OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { Layer } from 'ol/layer';

export class LayerComponent implements OnInit {
	protected instance: Layer = new Layer({});

	constructor(private host: MapComponent) {}

	ngOnInit(): void {
		this.host.instance.getLayers().push(this.instance);
	}
}
