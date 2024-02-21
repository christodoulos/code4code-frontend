import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingNavigationComponent } from '../landing-navigation/landing-navigation.component';
import { LandingAuthoringToolContentComponent } from '../landing-authoring-tool-content/landing-authoring-tool-content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'layout-landing-authoring-tool',
  standalone: true,
  imports: [
    CommonModule,
    LandingNavigationComponent,
    LandingAuthoringToolContentComponent,
    FooterComponent,
  ],
  templateUrl: './landing-authoring-tool.component.html',
  styleUrl: './landing-authoring-tool.component.css',
})
export class LandingAuthoringToolComponent {}
