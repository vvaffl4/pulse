import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import MapBrowserEvent from 'ol/MapBrowserEvent';

import Map from 'ol/Map.js';
import { useGeographic } from 'ol/proj';

@Component({
	selector: 'map-container',
	template: `<div [style.width]="width" [style.height]="height"></div>
		<ng-content></ng-content>`,
	styles: [
		`:host
				width: 100%
				height: 100%
	`,
	],
})
export class MapComponent implements OnInit, AfterViewInit {
	public readonly instance: Map = new Map();
	public readonly type: string = 'map';
	@Input() width = '100%';
	@Input() height = '100%';

	// Events
	@Output() click: EventEmitter<MapBrowserEvent<MouseEvent>>;
	@Output() singleclick: EventEmitter<MapBrowserEvent<MouseEvent>>;

	constructor(private host: ElementRef) {
		this.click = new EventEmitter<MapBrowserEvent<MouseEvent>>();
		this.singleclick = new EventEmitter<MapBrowserEvent<MouseEvent>>();
	}

	ngOnInit() {
		useGeographic();

		this.instance.setTarget(this.host.nativeElement.firstElementChild);

		this.instance.on('click', (event: MapBrowserEvent<MouseEvent>) => {
			this.click.emit(event);
		});
		this.instance.on('singleclick', (event: MapBrowserEvent<MouseEvent>) =>
			this.singleclick.emit(event)
		);
	}

	ngAfterViewInit() {
		this.instance.updateSize();
	}
}
