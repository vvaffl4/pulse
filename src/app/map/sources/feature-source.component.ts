import {
	AfterContentInit,
	Component,
	Host,
	OnInit,
	Optional,
} from '@angular/core';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { VectorLayerComponent } from '../layer/vector-layer.component';
import { SourceComponent } from './source.component';

@Component({
	selector: 'map-feature-source',
	template: `<ng-content></ng-content>`,
})
export default class FeatureSourceComponent
	extends SourceComponent
	implements OnInit
{
	override instance!: VectorSource;

	constructor(@Optional() @Host() layer: VectorLayerComponent) {
		super(layer);
	}

	ngOnInit(): void {
		this.register(
			new VectorSource({
				wrapX: false,
			})
		);
	}
}
