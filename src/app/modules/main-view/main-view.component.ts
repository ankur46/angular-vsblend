import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DynamicComponentDirective } from '../../shared/directives/dynamicComponent.directive';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
import { NavigationService } from '../../shared/services/navigation.service';
import { TrackClass } from '../../shared/trackClass';
@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule,
    NgSrcDirective,
    CommonModule,
    DynamicComponentDirective,
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent extends TrackClass {
  constructor(protected navigationService: NavigationService) {
    super();
  }
}
