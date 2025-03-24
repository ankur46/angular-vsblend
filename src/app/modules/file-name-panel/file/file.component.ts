import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgSrcDirective } from '../../../shared/directives/ngsrc.directive';
import { NavigationService } from '../../../shared/services/navigation.service';
import { TrackClass } from '../../../shared/trackClass';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [MatIconModule, CommonModule, NgSrcDirective],
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss',
})
export class FileComponent extends TrackClass implements OnInit {
  constructor(protected navigationService: NavigationService) {
    super();
  }

  ngOnInit(): void {
    if (this.navigationService.getAll$[0]) {
      [1, 0].forEach((index: number) => {
        const element = this.navigationService.getAll$[index];
        element && this.navigationService.toggleInView(element, true);
      });
    }
  }
}
