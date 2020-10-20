import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './characters/display/display.component';
import { DesignComponent } from './design-component/design.component';
import { DateTableComponent } from './characters/date-table/date-table.component';
import { FormComponent } from './characters/form/form.component';

const routes: Routes = [
  { path: 'date', component: DateTableComponent },
  { path: 'design', component: DesignComponent },
  { path: 'home', component: HomeComponent },
  { path: 'personnages', component: DisplayComponent },
  { path: 'add', component: FormComponent },
  { path: 'edit/:id', component: FormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * 1 - home avec lien pour naviguer vers différente page
 * 2 - tableau des personnages
 * 3 - graphique prix or/gemme
 * 4 - récapitulatif histoire par perso
 */
