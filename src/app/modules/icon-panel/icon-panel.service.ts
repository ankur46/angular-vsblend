import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { OTHERICONS, SVGICONS } from '../../shared/app.const';
import { IconPanelComponent } from './icon-panel.component';

@Injectable({
  providedIn: IconPanelComponent,
})
export class IconPanelService {
  private svgIcons: string[] = SVGICONS;
  private otherIcons: string[] = OTHERICONS;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.registerIcons();
  }

  get SvgIcons(): string[] {
    return [...this.svgIcons];
  }

  private registerIcons(): void {
    [...this.svgIcons, ...this.otherIcons].forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/vscode-icons/${icon}.svg`,
        ),
      );
    });
  }
}
