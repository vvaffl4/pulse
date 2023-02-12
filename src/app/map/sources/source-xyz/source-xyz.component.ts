import OSM from 'ol/source/OSM.js';
import {
	AfterContentInit,
	Component,
	Host,
	OnChanges,
	Optional,
} from '@angular/core';
import { TileLayerComponent } from '../../tilelayer/tilelayer.component';
import { SourceComponent } from '../source.component';

@Component({
	selector: 'map-source-xyz',
	template: `<ng-content></ng-content>`,
	styleUrls: ['./source-xyz.component.sass'],
})
export default class SourceXYZComponent
	extends SourceComponent
	implements AfterContentInit
{
	constructor(@Optional() @Host() layer: TileLayerComponent) {
		super(layer);
	}

	ngAfterContentInit() {
		this.register(new OSM());
	}
}
