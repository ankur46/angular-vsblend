import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponents } from '../../shared/componentImports/profile-component.const';
import { DynamicComponentDirective } from '../../shared/directives/dynamicComponent.directive';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
import { NavigationService } from '../../shared/services/navigation.service';
import { TrackClass } from '../../shared/trackClass';
@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    // eslint-disable-next-line @angular-eslint/no-forward-ref
    forwardRef(() => DynamicComponentDirective),
    MatTabsModule,
    MatIconModule,
    NgSrcDirective,
    CommonModule,
    ProfileComponents,
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
