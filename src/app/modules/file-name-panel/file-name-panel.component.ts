import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FILETREE } from '../../shared/app.const';
import { FileTree } from '../../shared/app.interface';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
import { TrackClass } from '../../shared/trackClass';

@Component({
  selector: 'app-file-name-panel',
  standalone: true,
  imports: [MatIconModule, CommonModule, NgSrcDirective],
  templateUrl: './file-name-panel.component.html',
  styleUrl: './file-name-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileNamePanelComponent extends TrackClass {
  protected treeDataSource: FileTree[] = FILETREE;
}
