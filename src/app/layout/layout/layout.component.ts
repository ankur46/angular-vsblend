import { Component } from '@angular/core';
import { components } from './component.const';

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
