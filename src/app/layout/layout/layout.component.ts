import { Component } from '@angular/core';
import { FileNamePanelComponent } from '../../modules/file-name-panel/file-name-panel.component';
import { IconPanelComponent } from '../../modules/icon-panel/icon-panel.component';
import { MainViewComponent } from '../../modules/main-view/main-view.component';
import { TerminalComponent } from '../../modules/terminal/terminal.component';
import { TopSearchComponent } from '../../modules/top-search/top-search.component';

const components = [
  TopSearchComponent,
  FileNamePanelComponent,
  TerminalComponent,
  MainViewComponent,
  IconPanelComponent,
];

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [...components],
})
export class LayoutComponent {
  layoutUi = '';
}
