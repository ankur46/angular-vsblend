import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPLOYMENTINFO } from '../../shared/app.const';
import { EmploymentInfo } from '../../shared/app.interface';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
import { TrackClass } from '../../shared/trackClass';

@Component({
  selector: 'app-employment',
  standalone: true,
  imports: [CommonModule, NgSrcDirective],
  templateUrl: './employment.component.html',
  styleUrl: './employment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmploymentComponent extends TrackClass {
  protected employmentInfo: EmploymentInfo[] = EMPLOYMENTINFO;
}
