import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FilePanelObjectHeader } from '../../shared/app.interface';
import { FilePanelComponents } from '../../shared/componentImports/file-panel-component.const';
import { DynamicComponentDirective } from '../../shared/directives/dynamicComponent.directive';
import { TrackClass } from '../../shared/trackClass';

@Component({
  selector: 'app-file-name-panel',
  standalone: true,
  imports: [
    FilePanelComponents,
    MatIconModule,
    // eslint-disable-next-line @angular-eslint/no-forward-ref
    forwardRef(() => DynamicComponentDirective),
  ],
  templateUrl: './file-name-panel.component.html',
  styleUrl: './file-name-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileNamePanelComponent extends TrackClass {
  @Input({ required: true }) headerData!: FilePanelObjectHeader;
  @Input({ required: true }) component = 'FileComponent';
}
