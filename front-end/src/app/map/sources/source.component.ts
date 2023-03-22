import { LayerComponent } from './../layer/layer.component';
import { Component, OnDestroy } from '@angular/core';
import Source from 'ol/source/Source';

@Component({ template: '' })
export class SourceComponent implements OnDestroy {
	public instance?: Source;

	constructor(protected host: LayerComponent) {}

	ngOnDestroy(): void {
		if (this.host) {
			this.host.reset();
		}
	}

	protected register(source: Source) {
		if (this.host) {
			this.host.setSource(source);
		}

		this.instance = source;
	}
}
