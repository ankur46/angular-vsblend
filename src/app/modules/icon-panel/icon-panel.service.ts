/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import { Injectable, signal, WritableSignal } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FILEPANELOBJECT, OTHERICONS, SVGICONS } from '../../shared/app.const';
import { FilePanelObject } from '../../shared/app.interface';
import { IconPanelComponent } from './icon-panel.component';

@Injectable({
  providedIn: IconPanelComponent,
})
export class IconPanelService {
  private svgIcons: string[] = SVGICONS;
  private otherIcons: string[] = OTHERICONS;

  private selectedIcon: WritableSignal<FilePanelObject> =
    signal<FilePanelObject>(FILEPANELOBJECT[0] as FilePanelObject);

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.registerIcons();
  }

  // Functions to handle icon selection-----------------------------------

  private set setSelectedIcon(fileElement: FilePanelObject) {
    this.selectedIcon.set(fileElement);
  }

  public get getSelectedIcon$(): FilePanelObject {
    return this.selectedIcon();
  }

  public onIconSelected(iconName: string): void {
    const fileElement: FilePanelObject | undefined =
      FILEPANELOBJECT.find(
        (element: FilePanelObject) => element.panelIcon === iconName,
      ) ?? FILEPANELOBJECT[0];
    if (fileElement) {
      this.setSelectedIcon = fileElement;
    } else {
      console.error('Icon not found');
    }
  }

  // Register custom icon into Icon Registry -----------------------------------

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
