import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  PERSONALDETAILDISPLAYFIELDS,
  PERSONALINFO,
} from '../../shared/app.const';
import {
  PersonalDetailDisplayFields,
  PersonalInfo,
} from '../../shared/app.interface';
import { EscapeHtmlPipe } from '../../shared/directives/EscapeHtmlPipe.directive';
import { TrackClass } from '../../shared/trackClass';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    EscapeHtmlPipe,
  ],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss',
})
export class PersonalDetailsComponent extends TrackClass {
  protected personalDetailsForm: FormGroup;
  protected personalInfo: PersonalInfo = PERSONALINFO;
  keys = Object.keys;
  protected displayFields: PersonalDetailDisplayFields[] =
    PERSONALDETAILDISPLAYFIELDS;

  readonly htmlSnippet: string = `<section class="w-1/2">
    <form [formGroup]="personalDetailsForm"
      class="flex flex-col gap-1">
      @for(item of displayFields;track trackByItem){
      <ng-container *ngTemplateOutlet="inputElement;
      context:{label:item.name | titlecase,value:item.key}" />
      }
    </form>
  </section>

  <ng-template #inputElement let-label="label" let-value="value"
    let-group="group">
    <div class="grid grid-cols-2 gap-1 items-center border-b-2
     border-gray-100">
      <mat-label>{{label}}</mat-label>
      <mat-form-field [formGroup]="personalDetailsForm">
        <input matInput [formControlName]="value" />
      </mat-form-field>
    </div>
  </ng-template>`;

  constructor(private fb: FormBuilder) {
    super();
    this.personalDetailsForm = this.fb.group({
      name: [''],
      age: [],
      birthPlace: [''],
      totalExperience: [],
      workLocation: [],
      totalProjects: [],
      hobbies: [],
      totalCompanies: [],
    });
    this.personalDetailsForm.patchValue(this.personalInfo);
  }

  public get getSnippet(): string {
    return this.htmlSnippet;
  }
}
