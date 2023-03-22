import { Component, Input, OnInit } from '@angular/core';
import { View } from 'ol';
import { MapComponent } from '../map.component';

@Component({
	selector: 'map-view',
	template: `<ng-content></ng-content>`,
})
export class ViewComponent implements OnInit {
	@Input() center: [number, number] = [0, 0];
	@Input() zoom: number = 2;
	public readonly instance: View = new View({
		center: this.center,
		zoom: this.zoom,
	});

	constructor(private host: MapComponent) {}

	ngOnInit() {
		this.instance.setCenter(this.center);
		this.instance.setZoom(this.zoom);
		this.host.instance.setView(this.instance);
	}
}
