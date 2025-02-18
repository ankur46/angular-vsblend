import { Component, inject } from '@angular/core';
import { IconPanelService } from '../../modules/icon-panel/icon-panel.service';
import { LayoutComponents } from '../../shared/componentImports/layout-component.const';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [...LayoutComponents],
  providers: [IconPanelService],
})
export class LayoutComponent {
  protected iconService = inject(IconPanelService);
}
