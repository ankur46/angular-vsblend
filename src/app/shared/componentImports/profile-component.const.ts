import { Type } from '@angular/core';
import { AccomplishmentComponent } from '../../ankurDeshwal/accomplishment/accomplishment.component';
import { ContactLinksComponent } from '../../ankurDeshwal/contact-links/contact-links.component';
import { EmploymentComponent } from '../../ankurDeshwal/employment/employment.component';
import { IntroductionComponent } from '../../ankurDeshwal/introduction/introduction.component';
import { PersonalDetailsComponent } from '../../ankurDeshwal/personal-details/personal-details.component';
import { ProjectsComponent } from '../../ankurDeshwal/projects/projects.component';
import { TechstackComponent } from '../../ankurDeshwal/techstack/techstack.component';

export const ProfileComponents: Type<unknown>[] = [
  PersonalDetailsComponent,
  TechstackComponent,
  EmploymentComponent,
  ContactLinksComponent,
  AccomplishmentComponent,
  IntroductionComponent,
  ProjectsComponent,
];

export const profileComponentMap = new Map<string, Type<unknown>>([
  ['PersonalDetailsComponent', PersonalDetailsComponent],
  ['TechstackComponent', TechstackComponent],
  ['EmploymentComponent', EmploymentComponent],
  ['ContactLinksComponent', ContactLinksComponent],
  ['AccomplishmentComponent', AccomplishmentComponent],
  ['IntroductionComponent', IntroductionComponent],
  ['ProjectsComponent', ProjectsComponent],
]);
