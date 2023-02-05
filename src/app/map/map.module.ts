import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import LayerComponent from './layer/layer.component';
import { TilelayerComponent } from './tilelayer/tilelayer.component';

@NgModule({
	declarations: [ViewComponent, LayerComponent, TilelayerComponent],
	imports: [CommonModule],
})
export class MapModule {}
