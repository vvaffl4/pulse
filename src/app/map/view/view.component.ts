import { Component, OnInit } from '@angular/core';
import { View } from 'ol';
import { MapComponent } from '../map.component';

@Component({
	selector: 'app-view',
	template: `<ng-content></ng-content>`,
	styleUrls: ['./view.component.sass'],
})
export class ViewComponent implements OnInit {
	public instance: View = new View();

	constructor(private host: MapComponent) {}

	ngOnInit() {
		this.host.instance.setView(this.instance);
	}
}
