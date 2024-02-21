import { Component } from '@angular/core';
import { LandingNavigationComponent } from '../landing-navigation/landing-navigation.component';
import { LandingPlansContentComponent } from '../landing-plans-content/landing-plans-content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-plans',
  standalone: true,
  imports: [
    LandingNavigationComponent,
    LandingPlansContentComponent,
    FooterComponent,
  ],
  templateUrl: './landing-plans.component.html',
  styleUrl: './landing-plans.component.css',
})
export class LandingPlansComponent {}
