import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
	{
		path: 'overview',
		loadChildren: () =>
			import('./overview/overview.module').then((m) => m.OverviewModule),
	},
	{ path: 'config', component: ConfigComponent },
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
