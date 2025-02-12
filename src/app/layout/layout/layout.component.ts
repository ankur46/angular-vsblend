import { Component } from '@angular/core';
import { LayoutComponents } from '../../shared/componentImports/layout-component.const';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [...LayoutComponents],
})
export class LayoutComponent {
  layoutUi = '';
}
