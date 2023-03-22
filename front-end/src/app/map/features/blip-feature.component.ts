import {
	Component,
	Host,
	Input,
	OnInit,
	AfterContentInit,
} from '@angular/core';
import Feature from 'ol/Feature';
import FeatureSourceComponent from '../sources/feature-source.component';
import { FeatureComponent } from './feature.component';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { Style, Circle, Stroke, Fill } from 'ol/style';

@Component({
	selector: 'map-blip-feature',
	template: `<ng-content></ng-content>`,
})
export class BlipFeatureComponent extends FeatureComponent implements OnInit {
	@Input() x: number = 0;
	@Input() y: number = 0;

	constructor(host: FeatureSourceComponent) {
		const feature = new Feature();

		const style = new Style({
			image: new Circle({
				radius: 10,
				stroke: new Stroke({
					color: 'rgba(255, 0, 0, 1)',
					width: 2,
				}),
				fill: new Fill({
					color: 'rgb(255, 0, 0)',
				}),
			}),
		});

		feature.setStyle(style);

		super(host, feature);
	}

	ngOnInit(): void {
		this.instance.setGeometry(new Point([this.x, this.y]));
		this.register();
	}
}
