import { MapComponent } from './map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { TileLayerComponent } from './tilelayer/tilelayer.component';
import SourceXYZComponent from './sources/source-xyz/source-xyz.component';
import { VectorLayerComponent } from './layer/vector-layer.component';
import FeatureSourceComponent from './sources/feature-source.component';
import { BlipFeatureComponent } from './features/blip-feature.component';
import { PolyFeatureComponent } from './features/poly-feature.component';

@NgModule({
	declarations: [
		MapComponent,
		ViewComponent,
		TileLayerComponent,
		VectorLayerComponent,
		SourceXYZComponent,
		FeatureSourceComponent,
		BlipFeatureComponent,
		PolyFeatureComponent,
	],
	imports: [CommonModule],
	exports: [
		MapComponent,
		ViewComponent,
		TileLayerComponent,
		VectorLayerComponent,
		FeatureSourceComponent,
		SourceXYZComponent,
		BlipFeatureComponent,
		PolyFeatureComponent,
	],
})
export class MapModule {}
