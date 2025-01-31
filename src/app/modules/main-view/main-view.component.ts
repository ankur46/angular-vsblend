import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { IntroductionComponent } from '../../ankurDeshwal/introduction/introduction.component';
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
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent {}
