import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PERSONALINFO } from '../../shared/app.const';
import { PersonalInfo } from '../../shared/app.interface';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
import { TrackClass } from '../../shared/trackClass';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [NgSrcDirective, CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent extends TrackClass {
  protected personalInfo: PersonalInfo = PERSONALINFO;
}
