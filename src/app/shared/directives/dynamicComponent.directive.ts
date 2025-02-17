import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { SharedService } from '../services/shared.service';

@Directive({
  selector: '[appDynamicComponent]',
  standalone: true,
  providers: [SharedService],
})
export class DynamicComponentDirective implements OnChanges {
  @Input('appDynamicComponent') componentName!: string;
  @Input() context!: string;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private sharedService: SharedService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['componentName']) {
      this.loadComponent();
    }
  }

  private loadComponent(): void {
    try {
      const component: Type<unknown> | undefined =
        this.sharedService.getComponent(this.componentName, this.context);
      if (component) {
        this.viewContainerRef.clear();
        this.viewContainerRef.createComponent(component);
      } else {
        console.warn(`Component not found for name: ${this.componentName}`);
      }
    } catch (error) {
      console.warn(error);
    }
  }
}
