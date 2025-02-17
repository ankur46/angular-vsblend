import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TrackClass } from '../../shared/trackClass';
import { FileComponent } from './file/file.component';

@Component({
  selector: 'app-file-name-panel',
  standalone: true,
  imports: [FileComponent, MatIconModule],
  templateUrl: './file-name-panel.component.html',
  styleUrl: './file-name-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileNamePanelComponent extends TrackClass {
  // @Input({ required: true }) headerData = '';
  // @Input({}) component = '';
}
