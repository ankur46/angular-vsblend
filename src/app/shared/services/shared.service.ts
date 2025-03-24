import { Injectable, Type } from '@angular/core';
import { MainViewComponent } from '../../modules/main-view/main-view.component';
import { FileComponentMap } from '../componentImports/file-panel-component.const';
import { profileComponentMap } from '../componentImports/profile-component.const';

@Injectable({
  providedIn: MainViewComponent,
})
export class SharedService {
  // eslint-disable-next-line @typescript-eslint/consistent-generic-constructors
  private parentComponentMap: Map<string, Type<unknown>> = new Map();

  // Functions to handle dynamic rendering of components-----------------------------------

  private set setParentComponentArray(name: string) {
    switch (name) {
      case 'ProfileComponents':
        this.parentComponentMap = profileComponentMap;
        break;
      case 'FilePanelComponents':
        this.parentComponentMap = FileComponentMap;
        break;
      default:
        this.parentComponentMap = new Map();
        break;
    }
  }

  public getComponent(
    componentName: string,
    parentName: string,
  ): Type<unknown> | undefined {
    this.setParentComponentArray = parentName;
    // // Find the component with the matching name
    // const index: number = this.parentComponentArray.findIndex(
    //   (component) => component.name === `_${componentName}`,
    // );

    // // Return the component if found, otherwise return first element
    // return index !== -1
    //   ? this.parentComponentArray[index]
    //   : this.parentComponentArray[0];
    return this.parentComponentMap.get(componentName);
  }
}
