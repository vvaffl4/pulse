import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pulse components
import { AlertListComponent } from './alert-list.component';
import { AlertComponent } from './alert/alert.component';

// Angular Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
	declarations: [AlertListComponent, AlertComponent],
	imports: [CommonModule, MatExpansionModule, MatIconModule, MatGridListModule],
	exports: [AlertListComponent],
})
export class AlertListModule {}
