import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LAYOUTICONS } from '../../shared/app.const';
import { TrackClass } from '../../shared/trackClass';
import { IconPanelService } from '../icon-panel/icon-panel.service';

@Component({
  selector: 'app-top-search',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './top-search.component.html',
  styleUrl: './top-search.component.scss',
  providers: [IconPanelService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopSearchComponent extends TrackClass {
  protected iconpanelService = inject(IconPanelService);
  protected layoutIcons: string[] = LAYOUTICONS;
}
