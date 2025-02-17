import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'calculator', component: CalculatorComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Om någon går till /, skicka dem till /home
];
