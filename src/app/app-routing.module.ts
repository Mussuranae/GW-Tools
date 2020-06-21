import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DisplayComponent } from './characters/display/display.component';
import { DesignComponent } from './design-component/design.component';

const routes: Routes = [
  { path: '', component: DisplayComponent },
  { path: 'design', component: DesignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
