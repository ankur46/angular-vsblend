import { Injectable, Type } from '@angular/core';
import { MainViewComponent } from '../../modules/main-view/main-view.component';
import { FilePanelComponents } from '../componentImports/file-panel-component.const';
import { ProfileComponents } from '../componentImports/profile-component.const';

@Injectable({
  providedIn: MainViewComponent,
})
export class SharedService {
  private parentComponentArray: Type<unknown>[] = [];

  // Functions to handle dynamic rendering of components-----------------------------------

  private set setParentComponentArray(name: string) {
    switch (name) {
      case 'ProfileComponents':
        this.parentComponentArray = [...ProfileComponents];
        break;
      case 'FilePanelComponents':
        this.parentComponentArray = [...FilePanelComponents];
        break;
      default:
        this.parentComponentArray = [];
        break;
    }
  }

  public getComponent(
    componentName: string,
    parentName: string,
  ): Type<unknown> | undefined {
    this.setParentComponentArray = parentName;
    console.log('🚀 ~ SharedService ~ parentName:', parentName, componentName);
    // Find the component with the matching name
    const index: number = this.parentComponentArray.findIndex(
      (component) => component.name === componentName,
    );

    // Return the component if found, otherwise return first element
    return index !== -1
      ? this.parentComponentArray[index]
      : this.parentComponentArray[0];
  }
}
