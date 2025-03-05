import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACTSANDLINKS } from '../../shared/app.const';
import { ContactLinks } from '../../shared/app.interface';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
import { TrackClass } from '../../shared/trackClass';

@Component({
  selector: 'app-contact-links',
  standalone: true,
  imports: [NgSrcDirective],
  templateUrl: './contact-links.component.html',
  styleUrl: './contact-links.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactLinksComponent extends TrackClass {
  protected contactLinks: ContactLinks[] = CONTACTSANDLINKS;
}
