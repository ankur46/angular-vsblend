import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ACCOMPLISHMENT } from '../../shared/app.const';
import { Accomplishment } from '../../shared/app.interface';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
import { TrackClass } from '../../shared/trackClass';

@Component({
  selector: 'app-accomplishment',
  standalone: true,
  imports: [CommonModule, NgSrcDirective],
  templateUrl: './accomplishment.component.html',
  styleUrl: './accomplishment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccomplishmentComponent extends TrackClass {
  protected accomplishment: Accomplishment[] = ACCOMPLISHMENT;
}
