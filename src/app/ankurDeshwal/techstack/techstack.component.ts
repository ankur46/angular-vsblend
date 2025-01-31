import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TECHSTACKINFO } from '../../shared/app.const';
import { TechStack } from '../../shared/app.interface';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
import { TrackClass } from '../../shared/trackClass';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [CommonModule, NgSrcDirective],
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechstackComponent extends TrackClass {
  protected techStackInfo: TechStack[] = TECHSTACKINFO;
}
