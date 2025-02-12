import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponents } from '../../shared/componentImports/profile-component.const';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
import { NavigationService } from '../../shared/navigation.service';
import { TrackClass } from '../../shared/trackClass';
@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
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

  protected getComponent(componentName: string) {
    const index = ProfileComponents.findIndex(
      (component) => component.name === `_${componentName}`,
    );
    if (index !== -1) {
      return ProfileComponents[index];
    } else {
      return ProfileComponents[0];
    }
  }
}
