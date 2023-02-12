import { Component } from '@angular/core';
import Feature from 'ol/Feature';
import FeatureSourceComponent from '../sources/feature-source.component';

@Component({
	template: ``,
})
export class FeatureComponent {
	constructor(
		protected host: FeatureSourceComponent,
		protected instance: Feature
	) {}

	register(): void {
		this.host.instance.addFeature(this.instance);
	}
}
