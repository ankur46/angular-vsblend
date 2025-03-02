import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TERMINALTABS, VSFOOTER } from '../../shared/app.const';
import { TrackClass } from '../../shared/trackClass';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [MatTabsModule, CommonModule, MatIconModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerminalComponent extends TrackClass {
  protected terminalTabs: string[] = TERMINALTABS;
  protected selectedTab = 'TERMINAL';
  protected vsFooter: string[] = VSFOOTER;
  protected _isTerminalExpanded = true;

  protected minimizeTerminal(minimized: boolean): void {
    this._isTerminalExpanded = !minimized;
  }
}
