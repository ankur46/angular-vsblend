import { Injectable, Type } from '@angular/core';
import { MainViewComponent } from '../../modules/main-view/main-view.component';
import { ProfileComponents } from '../componentImports/profile-component.const';

@Injectable({
  providedIn: MainViewComponent,
})
export class SharedService {
  private parentComponentArray: Type<unknown>[] = [];

  private set setParentComponentArray(name: string) {
    if (name === 'ProfileComponents') {
      this.parentComponentArray = [...ProfileComponents];
    } else {
      this.parentComponentArray = [];
    }
  }

  public getComponent(
    componentName: string,
    parentName: string,
  ): Type<unknown> | undefined {
    this.setParentComponentArray = parentName;

    // Find the component with the matching name
    const index: number = this.parentComponentArray.findIndex(
      (component) => component.name === `_${componentName}`,
    );

    // Return the component if found, otherwise return first element
    return index !== -1
      ? this.parentComponentArray[index]
      : this.parentComponentArray[0];
  }
}
