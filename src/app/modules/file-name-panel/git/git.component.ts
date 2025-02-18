import { Component } from '@angular/core';
import { CONTACTSANDLINKS } from '../../../shared/app.const';
import { NgSrcDirective } from '../../../shared/directives/ngsrc.directive';

@Component({
  selector: 'app-git',
  standalone: true,
  imports: [NgSrcDirective],
  templateUrl: './git.component.html',
  styleUrl: './git.component.scss',
})
export class GitComponent {
  protected gitLink: string =
    CONTACTSANDLINKS.find((key) => key.name === 'Github')?.url ?? '';
}
