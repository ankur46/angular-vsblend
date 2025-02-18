import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { PERSONALINFO, PROJECTDETAILS } from '../../shared/app.const';
import {
  NavigationElement,
  PersonalInfo,
  Project,
} from '../../shared/app.interface';
import { NgSrcDirective } from '../../shared/directives/ngsrc.directive';
import { NavigationService } from '../../shared/services/navigation.service';
import { TrackClass } from '../../shared/trackClass';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [NgSrcDirective, CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent extends TrackClass implements OnInit {
  protected personalInfo: PersonalInfo = PERSONALINFO;
  protected recentFiles: WritableSignal<NavigationElement[]> = signal([]);
  protected walkthroughProjects: WritableSignal<Project[]> = signal([]);
  constructor(protected _navigationService: NavigationService) {
    super();
  }

  protected get recentFiles$(): NavigationElement[] {
    return this.recentFiles();
  }
  protected get walkthroughProjects$(): Project[] {
    return this.walkthroughProjects();
  }

  ngOnInit(): void {
    this.recentFiles.set(this._navigationService.getAll$);
    const firstIndex = PROJECTDETAILS.length - 3;
    const secondIndex = PROJECTDETAILS.length - 1;
    this.walkthroughProjects.set(PROJECTDETAILS.slice(firstIndex, secondIndex));
  }

  goToProject(): void {
    const projectElement = this._navigationService.getAll$.find(
      (ele) => ele.id === 7,
    );
    projectElement &&
      this._navigationService.toggleInView(projectElement, true);
  }
}
