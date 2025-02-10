import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AccomplishmentComponent } from '../../ankurDeshwal/accomplishment/accomplishment.component';
import { ContactLinksComponent } from '../../ankurDeshwal/contact-links/contact-links.component';
import { EmploymentComponent } from '../../ankurDeshwal/employment/employment.component';
import { IntroductionComponent } from '../../ankurDeshwal/introduction/introduction.component';
import { PersonalDetailsComponent } from '../../ankurDeshwal/personal-details/personal-details.component';
import { ProjectsComponent } from '../../ankurDeshwal/projects/projects.component';
import { TechstackComponent } from '../../ankurDeshwal/techstack/techstack.component';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule,
    NgSrcDirective,
    CommonModule,
    IntroductionComponent,
    TechstackComponent,
    EmploymentComponent,
    ContactLinksComponent,
    AccomplishmentComponent,
    PersonalDetailsComponent,
    ProjectsComponent,
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent {}
