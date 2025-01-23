import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconPanelService } from './icon-panel.service';
@Component({
  selector: 'app-icon-panel',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './icon-panel.component.html',
  styleUrl: './icon-panel.component.scss',
  providers: [IconPanelService],
})
export class IconPanelComponent {
  protected iconpanelService = inject(IconPanelService);
  protected svgIcons: string[] = this.iconpanelService.SvgIcons;
  protected iconSelectedName: string = this.svgIcons[0] ?? '';

  trackByItem(_index: number, item: string): string {
    return item; // Or any unique identifier for each item
  }
}
