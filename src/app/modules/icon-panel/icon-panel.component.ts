import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../shared/services/navigation.service';
import { TrackClass } from '../../shared/trackClass';
import { IconPanelService } from './icon-panel.service';
@Component({
  selector: 'app-icon-panel',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './icon-panel.component.html',
  styleUrl: './icon-panel.component.scss',
  providers: [IconPanelService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPanelComponent extends TrackClass {
  protected iconpanelService = inject(IconPanelService);
  protected svgIcons: string[] = this.iconpanelService.SvgIcons;
  protected iconSelectedName: string = this.svgIcons[0] ?? '';

  constructor(protected navigationService: NavigationService) {
    super();
  }
}
