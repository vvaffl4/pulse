import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertListModule } from '../alert-list/alert-list.module';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MapModule } from '../map/map.module';

@NgModule({
	declarations: [OverviewComponent],
	exports: [OverviewComponent],
	imports: [
		CommonModule,
		OverviewRoutingModule,
		AlertListModule,
		MatListModule,
		MatGridListModule,
		MapModule,
	],
})
export class OverviewModule {}
